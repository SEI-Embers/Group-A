import api from "./apiConfig.js"

export const getPosts = async () => {
    try {
        const response = await api.get("/posts")
        return response.data;
    } catch (error) {
        console.error(`Failed to get posts - error: ${error}`);
    }
<<<<<<< HEAD
}
=======
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
>>>>>>> 61157330cb360625e6f5eff968c9248b612d3a05
