import React from 'react'

type Props = {}

const Users = (props: Props) => {
    return <>
        <p className="fs-1">Quản lí người dùng</p>
        <table className="table align-middle mb-0 bg-white ">
            <thead className="bg-light">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: '45px', height: '45px' }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1"> 0999999999</p>
                    </td>
                    <td>
                        <span className="badge badge-success rounded-pill d-inline">Active</span>
                    </td>

                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: '45px', height: '45px' }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1"> 0999999999</p>
                    </td>
                    <td>
                        <span className="badge badge-success rounded-pill d-inline">Active</span>
                    </td>

                </tr>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{ width: '45px', height: '45px' }}
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">John Doe</p>
                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1"> 0999999999</p>
                    </td>
                    <td>
                        <span className="badge badge-success rounded-pill d-inline">Active</span>
                    </td>

                </tr>

            </tbody>
        </table>
        
        <div className="row">
            <div className="col-md-12 d-flex justify-content-end">
                <ul className="pagination">
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

    </>
}

export default Users