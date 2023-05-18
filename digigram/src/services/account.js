import api from "./apiConfig.js"

export const getAccount = async (id) => {
    try {
        const response = await api.get(`/accounts/${id}`)
        return response.data;
    } catch (error) {
        console.error(`Failed to get posts - error: ${error}`);
    }
};