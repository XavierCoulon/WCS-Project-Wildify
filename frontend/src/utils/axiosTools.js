import axios from "axios";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3ZTA5OWU3LWZmYmUtNGY0Zi04MGZiLWVhZThiNThkZTUxZiIsInVzZXJuYW1lIjoid2lsZGVycyIsImVtYWlsIjoid2lsZGVyc0BnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImNyZWF0ZWRfYXQiOiIyMDIyLTEwLTE4VDE0OjIzOjEyLjc2NFoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0xMC0xOFQxNDoyMjo0Ni43MjdaIiwiaWF0IjoxNjY2MTAzMDY1fQ.uKZd2lUn9iundgu3QVLMNwZwmnxhV3qUzJ3xNB10tW8";

const apiUri = "https://wildify-api.jidayyy.com/api/v1";

const axiosInstance = axios.create({
  baseURL: apiUri,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    // TODO to use json instead //
    "Content-Type": "multipart/form-data",
  },
});

export const songsFetcher = {
  getAll: async () => (await axiosInstance.get(`/songs/`)).data,
  getOne: async (id) => (await axiosInstance.get(`/songs/${id}`)).data,
  delete: async (id) => (await axiosInstance.delete(`/songs/${id}`)).data,
  upload: async (selectedFile) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    const res = await axiosInstance.post("/songs/", formData);
    return res.data;
  },
};

export const playlistsFetcher = {
  getAll: async () => (await axiosInstance.get("/playlists")).data,
  getOne: async (id) => (await axiosInstance.get(`/playlists/${id}`)).data,
  delete: async (id) => (await axiosInstance.delete(`/playlists/${id}`)).data,
  create: async ({ title, description }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    const res = await axiosInstance.post("/playlists/", formData);
    return res.data;
  },
  update: async ({ id, title, description }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    const res = await axiosInstance.put(`/playlists/${id}`, formData);
    return res.data;
  },
  // Add a song to a playlist --todo
  // addSong: async(playlistId, songId){

  // }
};

export const genresFetcher = {
  getAll: async () => (await axiosInstance.get(`/genres`)).data,
  getOne: async (id) => (await axiosInstance.get(`/genres/${id}`)).data,
  delete: async (id) => (await axiosInstance.delete(`/genres/${id}`)).data,
};

export const albumsFetcher = {
  getAll: async () => (await axiosInstance.get("/albums")).data,
  getOne: async (id) => (await axiosInstance.get(`/albums/${id}`)).data,
  delete: async (id) => (await axiosInstance.delete(`/albums/${id}`)).data,
  uploadPicture: async (selectedPicture, id) => {
    const formData = new FormData();
    formData.append("file", selectedPicture);
    await axiosInstance.post(`/albums/${id}/picture`, formData);
  },
};
