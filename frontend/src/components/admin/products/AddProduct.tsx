import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../../store/api/products";
import { useGetAllCategoriesQuery } from "../../../store/api/categories";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CLOUD_NAME = "ddtksppbq";
const UPLOAD_PRESET = "demo-upload";
const FOLDER_NAME = "ban-hang";
const cloudinaryAPI =
  "https://api.cloudinary.com/v1_1/" + CLOUD_NAME + "/image/upload";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addProduct] = useCreateProductMutation();

  const { data: categories } = useGetAllCategoriesQuery(null);
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const img = [];
    const formData = new FormData();
    for (let file of data.image) {
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
    console.log(img);

    await addProduct({ ...data, image: img, categoryId: data.categoryId });
    navigate("/admin/products");
  };
  return (
    <>
      <p className="fs-1">Thêm sản phẩm</p>

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
            {...register("image", { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            {...register("categoryId")}
          >
            {categories?.map((category: any) => {
              return (
                <option key={category._id} value={category._id}>
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

export default AddProduct;
