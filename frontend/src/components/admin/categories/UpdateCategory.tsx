import React from 'react'

type Props = {}

const UpdateCategory = (props: Props) => {
  return <>
    <p className="fs-1">Sửa danh mục</p>

    <form>
      <div className="form-group">
        <label>Sửa danh mục</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="tên danh mục" />
      </div>
      <div className="form-group">
        <label >Mô tả</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
      </div>
      <button type="button" className="btn btn-primary m-2">Thêm sản phẩm</button>
    </form>

  </>
}

export default UpdateCategory