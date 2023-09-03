import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Base URL for your API endpoints
const BASE_URL = 'http://localhost:8080';

// Fetch all stories
export const fetchStories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/fullstories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stories:', error);
        throw error;
    }
}

// Fetch all users
export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
export const fetchStoryById = async (storyId) => {
  const response = await axios.get(`${BASE_URL}/fullstories/${storyId}`);
  return response.data;
}


