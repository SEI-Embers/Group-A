import api from "./apiConfig.js"

export const getPosts = async () => {
    try {
        const response = await api.get("/posts")
        return response.data;
    } catch (error) {
        console.error(`Failed to get posts - error: ${error}`);
    }
};

export const getPost = async (id) => {
    try {
        const response = await api.get(`/posts/${id}`)
        return response.data;
    } catch (error) {
        console.error(`Failed to get posts - error: ${error}`);
    }
};

export const createPost = async (post) => {
    try {
        const response = await api.post("/posts", post);
        return response.data;
    } catch (error) {
        throw error;
    }
};
