import axiosClient from "./axiosConfig";

export const reqeditEmploye = (id,employe) => axiosClient.put(`"/user/${id}"`,employe);