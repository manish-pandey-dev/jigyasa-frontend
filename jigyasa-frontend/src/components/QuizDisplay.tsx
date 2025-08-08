import React from 'react';
import { QuizResponse } from '../types/quiz.types';

interface QuizDisplayProps {
  quizData: QuizResponse;
}

const QuizDisplay: React.FC<QuizDisplayProps> = ({ quizData }) => {
  return (
    <div className="quiz-display-card">
      <div className="quiz-metadata">
        <span>Audio Duration: {quizData.audio_duration.toFixed(2)}s</span>
        <span>Processing Time: {quizData.processing_time.toFixed(2)}s</span>
        <span>Questions: {quizData.questions.length}</span>
      </div>
      {quizData.questions.map((q, qIndex) => (
        <div key={qIndex} className="question-card">
          <h3>Question {qIndex + 1}</h3>
          <p>{q.question}</p>
          <div className="answers">
            {q.answers.map((ans, aIndex) => (
              <div
                key={aIndex}
                className={`answer ${ans.is_correct ? 'correct' : ''}`}
              >
                <span>{String.fromCharCode(65 + aIndex)}:</span> {ans.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizDisplay;
