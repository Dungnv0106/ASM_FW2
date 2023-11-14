import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../store/api/categories";
import { ICategory } from "../../interfaces/categories";

const Categories = () => {
  const dispatch = useDispatch();
  const {
    isError,
    isLoading,
    data: categoryList,
  } = useGetAllCategoriesQuery(null);
  const [deleteCate] = useDeleteCategoryMutation();
  const handleClick = (category: ICategory) => {
    let isChecked = window.confirm("bạn có muốn xóa không ?");
    console.log(isChecked);

    if (isChecked) {
      deleteCate(category);
    }
  };
  if (isLoading) {
    return <span className="text-red">Loading...</span>;
  }

  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="fs-1">Quản lí sản phẩm 1</p>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Tên</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {(categoryList as ICategory[] | null)?.map((category) => {
            return (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>
                  <Link to={`/admin/categories/update/${category._id}`}>
                    <button
                      type="button"
                      className="btn btn-success m-1 text-white"
                    >
                      {" "}
                      Edit
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-danger m-1"
                    onClick={() => handleClick(category)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-end">
            <a href="/admin/categories/add">
              <button type="button" className="btn btn-primary m-2">
                Thêm danh mục
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
