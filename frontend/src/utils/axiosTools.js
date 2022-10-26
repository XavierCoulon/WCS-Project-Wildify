import axios from "axios";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3ZTA5OWU3LWZmYmUtNGY0Zi04MGZiLWVhZThiNThkZTUxZiIsInVzZXJuYW1lIjoid2lsZGVycyIsImVtYWlsIjoid2lsZGVyc0BnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImNyZWF0ZWRfYXQiOiIyMDIyLTEwLTE4VDE0OjIzOjEyLjc2NFoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0xMC0xOFQxNDoyMjo0Ni43MjdaIiwiaWF0IjoxNjY2MTAzMDY1fQ.uKZd2lUn9iundgu3QVLMNwZwmnxhV3qUzJ3xNB10tW8";

const apiUri = "https://wildify-api.jidayyy.com/api/v1";

const axiosInstance = axios.create({
  baseURL: apiUri,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  },
});

// Endpoints related to songs
export async function getAllSongs() {
  await axiosInstance.get("/songs");
}

export const getSong = async (trackID) => {
  await axiosInstance.get(`songs/${trackID}`);
};

export const deleteSong = async (trackID) => {
  await axiosInstance.delete(`songs/${trackID}`);
};

export const uploadTrack = async (selectedFile) => {
  const formData = new FormData();
  formData.append("file", selectedFile);
  await axiosInstance.post("songs/", formData);
};

// Endpoints related to albums

export const uploadPicture = async (selectedPicture, albumId) => {
  const formData = new FormData();
  formData.append("file", selectedPicture);
  await axiosInstance.post(`albums/${albumId}/picture`, formData);
};

// Endpoints related to playlists

export const createPlaylist = async (title, description, picture) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("picture", picture);
  await axiosInstance.post("playlists/", formData);
};

export const getAllPlaylist = async () => {
  await axiosInstance.get("/playlists");
};

export const getPlaylist = async (playlistID) => {
  await axiosInstance.get(`playlists/${playlistID}`);
};

export const deletePlaylist = async (playlistID) => {
  await axiosInstance.delete(`playlists/${playlistID}`);
};

// Endpoints related to genre

export const getGenre = async (genreID) => {
  await axiosInstance.get(`genres/${genreID}`);
};

export const deleteGenre = async (genreID) => {
  await axiosInstance.delete(`genres/${genreID}`);
};

export const genreFetcher = {
  getAll: async () => (await axiosInstance.get(`/genres`)).data,
};

export const albumFetcher = {
  getAll: async () => (await axiosInstance.get("/albums")).data,
  getOne: async (id) => (await axiosInstance.get(`/albums/${id}`)).data,
  delete: async (id) => (await axiosInstance.delete(`/albums/${id}`)).data,
};
