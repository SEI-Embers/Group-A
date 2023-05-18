import api from "./apiConfig.js";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Token ${localStorage.getItem("token") || null}`);
  });
};

export const getPosts = async () => {
  try {
    const response = await api.get("/posts/");
    return response.data;
  } catch (error) {
    console.error(`Failed to get posts - error: ${error}`);
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get posts - error: ${error}`);
  }
};

export const createPost = async (post) => {
  try {
    let token = await getToken();

    if (token === "Token null") {
      return null;
    }

    const headers = {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: token,
    };
    const response = await api.post("/posts/", post, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    let token = await getToken();

    if (token === "Token null") {
      return null;
    }

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };
    const response = await api.delete(`/posts/${id}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
