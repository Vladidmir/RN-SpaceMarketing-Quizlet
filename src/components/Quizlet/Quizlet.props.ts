export interface QuizComponentProps {
  currentQuestion: {
    index: number;
    totalQuestions: number;
    text: string;
    options: string[];
  };
  onAnswer: (selectedOption: string) => void;
  onNextQuestion: () => void;
}
