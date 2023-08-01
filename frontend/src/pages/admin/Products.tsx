import React from 'react'

type Props = {}

const Products = (props: Props) => {
    return <>
        <div className="row align-items-center">
            <div className="col-md-6">
                <p className="fs-1">Quản lí sản phẩm</p>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </div>

        <table className="table text-center">
            <thead>
                <tr>
                    <th scope="col">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>
                    </th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Hành động</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>
                    </th>
                    <td>Sit</td>
                    <td>Amet</td>
                    <td>Amet</td>
                    <td>
                        <img src="" alt="...ảnh sản phẩm" />
                    </td>
                    <td>
                        <button type="button" className="btn btn-info m-1">Chi tiết</button>
                        <button type="button" className="btn btn-success m-1">Sửa</button>
                        <button type="button" className="btn btn-danger m-1">Xóa</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>
                    </th>
                    <td>Sit</td>
                    <td>Amet</td>
                    <td>Amet</td>
                    <td>
                        <img src="" alt="...ảnh sản phẩm" />
                    </td>
                    <td>
                        <button type="button" className="btn btn-info m-1">Chi tiết</button>
                        <button type="button" className="btn btn-success m-1">Sửa</button>
                        <button type="button" className="btn btn-danger m-1">Xóa</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>
                    </th>
                    <td>Sit</td>
                    <td>Amet</td>
                    <td>Amet</td>
                    <td>
                        <img src="" alt="...ảnh sản phẩm" />
                    </td>
                    <td>
                        <button type="button" className="btn btn-info m-1">Chi tiết</button>
                        <button type="button" className="btn btn-success m-1">Sửa</button>
                        <button type="button" className="btn btn-danger m-1">Xóa</button>
                    </td>
                </tr>

            </tbody>
        </table>
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex flex-column align-items-end">
                    <a href="/admin/products/add"><button type="button" className="btn btn-primary m-2">Thêm sản phẩm</button></a>

                    <ul className="pagination mb-3">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </>
}

export default Products