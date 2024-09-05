import axiosInstance from "../../utils/axiosInstance";

export const uploadFile = async (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
 
  try {
    const response = await axiosInstance.post("/excel/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Thêm header cho Content-Type
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error upload file:", error);
    throw error;
  }
};
