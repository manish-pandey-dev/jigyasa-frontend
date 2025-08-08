import axios from 'axios';
import { QuizResponse } from '../types/quiz.types';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

export const getHealth = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_URL}/health`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to connect to the backend.');
  }
};

export const uploadAudio = async (file: File): Promise<QuizResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${API_URL}/api/upload-audio`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to upload audio file.');
  }
};
