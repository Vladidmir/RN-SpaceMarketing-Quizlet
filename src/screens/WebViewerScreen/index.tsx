import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import {Button, WebViewer} from '../../components';

import {s} from './webViewer.styles';

export const WebViewerScreen = () => {
  const [url, setUrl] = useState('https://example.com');
  const [webViewKey, setWebViewKey] = useState(1);

  const handleYouTubeButtonClick = () => {
    setUrl('https://www.youtube.com');
    setWebViewKey(webViewKey + 1);
  };

  const handleIncorrectUrlButtonClick = () => {
    setUrl('https://www.Incorrect');
    setWebViewKey(webViewKey + 1);
  };

  return (
    <SafeAreaView style={s.root}>
      <WebViewer url={url} key={webViewKey} />

      <View style={s.buttonContainer}>
        <Button
          mode="default"
          onPress={handleYouTubeButtonClick}
          title="YouTube URL"
          buttonStyle={s.correctBtnUrl}
        />
        <Button
          mode="default"
          onPress={handleIncorrectUrlButtonClick}
          title="Incorrect"
        />
      </View>
    </SafeAreaView>
  );
};
