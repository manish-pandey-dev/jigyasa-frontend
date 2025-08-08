import React, { useState } from 'react';
import './App.css';
import ConnectionStatus from './components/ConnectionStatus';
import FileUploader from './components/FileUploader';
import LoadingSpinner from './components/LoadingSpinner';
import QuizDisplay from './components/QuizDisplay';
import { uploadAudio } from './services/api';
import { QuizResponse } from './types/quiz.types';

function App() {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [quizData, setQuizData] = useState<QuizResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    setIsProcessing(true);
    setError(null);
    setQuizData(null);
    try {
      const data = await uploadAudio(file);
      setQuizData(data);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="App">
      <ConnectionStatus />
      <header className="header">
        <h1>🤔 Jigyasa</h1>
        <p>Upload your session recording and get AI-generated quiz questions!</p>
      </header>

      {isProcessing && <LoadingSpinner />}

      {error && <div className="error-message">{error}</div>}

      {!quizData && (
        <FileUploader onFileUpload={handleFileUpload} isProcessing={isProcessing} />
      )}

      {quizData && <QuizDisplay quizData={quizData} />}
    </div>
  );
}

export default App;
