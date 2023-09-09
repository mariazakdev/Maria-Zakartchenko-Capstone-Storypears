import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL; 

// CRUD for Genres
export const getGenres = () => axios.get(`${BASE_URL}/genres`);
export const getGenre = (id) => axios.get(`${BASE_URL}/genres/${id}`);
export const createGenre = (data) => axios.post(`${BASE_URL}/genres`, data);
export const updateGenre = (id, data) => axios.put(`${BASE_URL}/genres/${id}`, data);
export const deleteGenre = (id) => axios.delete(`${BASE_URL}/genres/${id}`);

// CRUD for Prompts
export const getPrompts = () => axios.get(`${BASE_URL}/prompts`);
export const getPrompt = (id) => axios.get(`${BASE_URL}/prompts/${id}`);
export const createPrompt = (data) => axios.post(`${BASE_URL}/prompts`, data);
export const updatePrompt = (id, data) => axios.put(`${BASE_URL}/prompts/${id}`, data);
export const deletePrompt = (id) => axios.delete(`${BASE_URL}/prompts/${id}`);

// CRUD for Emotions
export const getEmotions = () => axios.get(`${BASE_URL}/emotions`);
export const getEmotion = (id) => axios.get(`${BASE_URL}/emotions/${id}`);
export const createEmotion = (data) => axios.post(`${BASE_URL}/emotions`, data);
export const updateEmotion = (id, data) => axios.put(`${BASE_URL}/emotions/${id}`, data);
export const deleteEmotion = (id) => axios.delete(`${BASE_URL}/emotions/${id}`);

// CRUD for Feelings
export const getFeelings = () => axios.get(`${BASE_URL}/feelings`);
export const getFeeling = (id) => axios.get(`${BASE_URL}/feelings/${id}`);
export const createFeeling = (data) => axios.post(`${BASE_URL}/feelings`, data);
export const updateFeeling = (id, data) => axios.put(`${BASE_URL}/feelings/${id}`, data);
export const deleteFeeling = (id) => axios.delete(`${BASE_URL}/feelings/${id}`);

