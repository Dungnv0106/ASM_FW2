import { useEffect } from "react";
import {
  useEditCategoryMutation,
  useGetCategoryByIdQuery,
} from "../../../store/api/categories";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateCategory = () => {
  const { id } = useParams();
  console.log(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data: cateById } = useGetCategoryByIdQuery(id);

  const [upadateCate] = useEditCategoryMutation();
  const navigate = useNavigate();
  useEffect(() => {
    reset(cateById);
  }, [cateById]);
  const onSubmit = async (data: any) => {
    await upadateCate({ _id: cateById._id, ...data });
    navigate("/admin/categories");
  };
  console.log(cateById);

  return (
    <>
      <p className="fs-1">Sửa danh mục</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Tên danh mục</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Tên danh mục"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">Bắt buộc phải nhập</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary m-2">
          Thêm sản phẩm
        </button>
      </form>
    </>
  );
};

export default UpdateCategory;
