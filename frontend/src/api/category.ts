import { ICategory } from "../types/category";
import instance from "./index";

const getAllCategory = () => {
    return instance.get("/category");
};
const getOneCategory = (id: string) => {
  return instance.get(`/category/${id}`);
};
const deleteCategory = (id: number | string) => {
    const { accessToken } = JSON.parse(localStorage.getItem("user")!);
    return instance.delete(`/category/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
const addCategory = (category:ICategory) => {
  const { accessToken } = JSON.parse(localStorage.getItem("user")!);
  return instance.post(`/category/` , category , {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
const updateCategory = (category:ICategory) => {
  const { accessToken } = JSON.parse(localStorage.getItem("user")!);
  return instance.patch(`/category/${category.id}` , category , {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export { getAllCategory, deleteCategory, addCategory , getOneCategory, updateCategory}