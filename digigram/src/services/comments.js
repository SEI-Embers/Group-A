import api from "./apiConfig.js";

export const getComments = async () => {
    try {
        const response = await api.get("./comments");
        return response.data;
    } catch (error) {
        console.error(`Failed get comments - error:${error}`);
        throw error;
    }
};

export const createComment = async (comment) => {
    try{
        const response = await api.post("/comments", comment);
        return response.data;    
    } catch (error) {
        throw error;
    }
};

export const updateComment = async (id, update) => {
    try {
        const response = await api.put(`comments/${id}`, update);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteComment = async (id) => {
    try {
        const response = await api.delete(`/comments/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};