import { IProduct } from "../types/product";
import instance from "./index";




const getAllProduct = () => {
    return instance.get("/products");
};
const getOneProduct = (id: string) => {
  return instance.get(`/product/${id}`);
};
const deleteProduct = (id: string) => {
    const { accessToken } = JSON.parse(localStorage.getItem("user")!);
    return instance.delete(`/product/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
const addProduct = (product: IProduct) => {
  const { accessToken } = JSON.parse(localStorage.getItem("user")!);
  return instance.post(`/projects/` , product , {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
const updateProduct = (product: IProduct) => {
  const { accessToken } = JSON.parse(localStorage.getItem("user")!);
  return instance.patch(`/projects/${product.id}` , product , {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export { getAllProduct, deleteProduct, addProduct,getOneProduct ,updateProduct}