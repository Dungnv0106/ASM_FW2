import { useGetAllCategoriesQuery } from "../../../store/api/categories";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../store/api/products";
import { useEffect } from "react";

const CLOUD_NAME = "ddtksppbq";
const UPLOAD_PRESET = "demo-upload";
const FOLDER_NAME = "ban-hang";
const cloudinaryAPI =
  "https://api.cloudinary.com/v1_1/" + CLOUD_NAME + "/image/upload";

const UpdateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  const { data: productById } = useGetProductByIdQuery(id);
  const { data: categories } = useGetAllCategoriesQuery(null);
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();
  console.log(productById?.data.image);

  const onSubmit = async (data: any) => {
    let img = [];
    const arrayImage = Array.from(data.image);
    console.log(arrayImage);

    if (data.image.length === productById?.data.image.length) {
      // Nếu không có ảnh mới, giữ lại ảnh cũ bằng cách lấy lại ảnh cũ từ productById
      img = productById?.data.image;
    } else {
      // Nếu có ảnh mới, tiến hành xử lý ảnh mới
      for (let file of data.image) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);
        formData.append("folder", FOLDER_NAME);
        const response = await axios.post(cloudinaryAPI, formData);
        console.log(response.data.url);

        const imageUrl = {
          publicId: response.data.version_id,
          url: response.data.url,
        };
        img.push(imageUrl);
      }
    }

    await updateProduct({
      _id: productById._id,
      ...data,
      image: img,
      categoryId: data.categoryId,
    });
    navigate("/admin/products");
  };
  useEffect(() => {
    reset(productById?.data);
  }, [productById]);
  return (
    <>
      <p className="fs-1">Sửa sản phẩm</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Tên sản phẩm"
            {...register("productName", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Giá sản phẩm"
            {...register("price", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>originalPrice</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Giá sản phẩm"
            {...register("originalPrice", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Decription</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Giá sản phẩm"
            {...register("description", { required: true })}
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            multiple
            className="form-control"
            id="inputGroupFile03"
            aria-describedby="inputGroupFileAddon03"
            aria-label="Upload"
            {...register("image")}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            {...register("categoryId", { required: true })}
          >
            {categories?.map((category: any) => {
              return (
                <option key={category._id} value={category._id} selected>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit" className="btn btn-primary m-2">
          Thêm sản phẩm
        </button>
      </form>
    </>
  );
};

export default UpdateProduct;
