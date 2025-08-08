export interface Answer {
  text: string;
  is_correct: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface QuizResponse {
  questions: Question[];
  processing_time: number;
  audio_duration: number;
  message: string;
}
