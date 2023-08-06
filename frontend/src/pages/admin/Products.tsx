import { useState } from "react";
import { useGetAllProductsQuery } from "../../store/api/products";
import { Pagination } from "antd";
const Products = () => {
  const { isLoading, data: productList } = useGetAllProductsQuery(null);
  console.log(productList);

  if (isLoading) {
    return <div> Loading... </div>;
  }
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const currentProducts = productList.slice(startIndex, endIndex);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="fs-1">Quản lí sản phẩm</p>
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
            <th scope="col">Giá</th>
            <th scope="col">Ảnh</th>

            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts?.map((product: any) => {
            return (
              <tr>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>
                  {product.image?.map((item: any) => {
                    return (
                      <img
                        width={200}
                        key={item._id}
                        src={item.url}
                        alt="sản phẩm đang load"
                      />
                    );
                  })}
                </td>

                <td>
                  <button type="button" className="btn btn-success m-1">
                    Sửa
                  </button>
                  <button type="button" className="btn btn-danger m-1">
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <span className="text-center">
        <Pagination
          total={productList.length}
          pageSize={6}
          current={currentPage}
          onChange={handlePageChange}
        />
      </span>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-end">
            <a href="/admin/products/add">
              <button type="button" className="btn btn-primary m-2">
                Thêm sản phẩm
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
