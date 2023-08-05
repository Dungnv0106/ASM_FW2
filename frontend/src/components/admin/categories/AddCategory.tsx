import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateCategoryMutation } from "../../../store/api/categories";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addCategory] = useCreateCategoryMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    await addCategory(data);
    navigate("/admin/categories");
  };
  return (
    <>
      <p className="fs-1">Thêm danh mục</p>

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
export default AddCategory;
