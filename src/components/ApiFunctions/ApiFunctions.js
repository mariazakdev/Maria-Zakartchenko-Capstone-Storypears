import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Base URL for your API endpoints
const BASE_URL = 'http://localhost:8080';

// Users
export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

// StoryTree
export const fetchStoryTree = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/storytree`);
        return response.data;
    } catch (error) {
        console.error('Error fetching story tree:', error);
        throw error;
    }
}

export const fetchStoryTreeById = async (storyId) => {
    try {
        const response = await axios.get(`${BASE_URL}/storytree/${storyId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching story tree with ID ${storyId}:`, error);
        throw error;
    }
}

// StoryBranch
export const fetchStoryBranch = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/storybranch`);
        return response.data;
    } catch (error) {
        console.error('Error fetching story branches:', error);
        throw error;
    }
}

export const fetchStoryBranchById = async (storyId) => {
    try {
        const response = await axios.get(`${BASE_URL}/storybranch/${storyId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching story branch with ID ${storyId}:`, error);
        throw error;
    }
}

// Detailed items
export const getGenres = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/genres`);
        return response.data;
    } catch (error) {
        console.error('Error fetching genres:', error);
        throw error;
    }
}

export const getEmotions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/emotions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching emotions:', error);
        throw error;
    }
}

export const getPrompts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/prompts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching prompts:', error);
        throw error;
    }
}

export const getFeelingPrompts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/feelings`);
        return response.data;
    } catch (error) {
        console.error('Error fetching feeling prompts:', error);
        throw error;
    }
}
