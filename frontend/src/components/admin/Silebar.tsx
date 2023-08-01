import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle'; // sử dụng js bootrap riêng cho sidebar

type Props = {}

const Silebar = (props: Props) => {
    return <>
        <nav className="navbar bg-body-tertiary ">
            <div className="container-fluid">
                <button className="navbar-toggler order-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand mx-auto order-1" href="#">Nhóm 5 Shop</a>
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Nhóm 5 Shop</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-st flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/admin">Thống kê</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" href="/admin/products">Sản phẩm</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" href="/admin/categories">Danh mục</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" href="/admin/users">Người dùng</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" href="/admin/orders">Đơn hàng</a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" href="/">Trang chủ</a>
                            </li>



                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>

    </>
}

export default Silebar