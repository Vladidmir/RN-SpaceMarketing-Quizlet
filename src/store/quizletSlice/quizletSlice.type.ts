export interface Question {
  text: string;
  options: string[];
  correctOption: string;
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  quizCompleted: boolean;
}
