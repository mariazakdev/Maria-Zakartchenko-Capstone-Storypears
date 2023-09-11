import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL; 


// StoryTree Endpoints
const createStoryTree = (data) => {
    return axios.post(`${BASE_URL}/storytree/`, data);
}

const getAllStoryTrees = () => {
    return axios.get(`${BASE_URL}/storytree/`);
}

const getStoryTree = (id) => {
    return axios.get(`${BASE_URL}/storytree/${id}`);
}

const deleteStoryTree = (id) => {
    return axios.delete(`${BASE_URL}/storytree/${id}`);
}

// StoryBranch Endpoints
const createStoryBranch = (data) => {
    return axios.post(`${BASE_URL}/storybranch/`, data);
}

const getAllStoryBranches = () => {
    return axios.get(`${BASE_URL}/storybranch/`);
}

const getStoryBranch = (id) => {
    return axios.get(`${BASE_URL}/storybranch/${id}`);
}

const updateStoryBranch = (id, data) => {
    return axios.put(`${BASE_URL}/storybranch/${id}`, data);
}

const deleteStoryBranch = (id) => {
    return axios.delete(`${BASE_URL}/storybranch/${id}`);
}

const addContribution = (id, data) => {
    return axios.post(`${BASE_URL}/storybranch/${id}/contribution`, data);
}

export {
    createStoryTree,
    getAllStoryTrees,
    getStoryTree,
    deleteStoryTree,
    createStoryBranch,
    getAllStoryBranches,
    getStoryBranch,
    updateStoryBranch,
    deleteStoryBranch,
    addContribution
};
