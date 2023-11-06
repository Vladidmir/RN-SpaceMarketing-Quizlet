import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import WebView from 'react-native-webview';

import {s} from './webViewer.styles';

import {WebViewerProps, WebViewerState} from './WebViewer.props';

export const WebViewer: React.FC<WebViewerProps> = ({url}) => {
  const [state, setState] = useState<WebViewerState>({
    urlExists: true,
    isLoading: true,
  });

  const checkURLExists = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setState(prevState => ({
          ...prevState,
          urlExists: false,
        }));
      }
    } catch (error) {
      setState(prevState => ({
        ...prevState,
        urlExists: false,
      }));
    }
    setState(prevState => ({
      ...prevState,
      isLoading: false,
    }));
  };

  useEffect(() => {
    checkURLExists();
  }, [url]);

  const {urlExists, isLoading} = state;

  if (isLoading) {
    return (
      <View style={s.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (urlExists) {
    return <WebView source={{uri: url}} style={s.webView} />;
  } else {
    return (
      <View style={s.errorContainer}>
        <Text style={s.errorText}>Site doesn't exisst</Text>
      </View>
    );
  }
};
