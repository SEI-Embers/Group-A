import api from "./apiConfig.js"

export const getPosts = async () => {
    try {
        const response = await api.get("/post")
        return response.data;
    } catch (error) {
        console.error(`Failed to get posts - error: ${error}`);
    }
}
