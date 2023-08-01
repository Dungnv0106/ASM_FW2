import React from 'react'

type Props = {}

const AddCategory = (props: Props) => {
  return <>
    <p className="fs-1">Thêm danh mục</p>

    <form>
      <div className="form-group">
        <label>Tên danh mục</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Tên danh mục" />
      </div>
      <div className="form-group">
        <label >Mô tả</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
      </div>
      <button type="button" className="btn btn-primary m-2">Thêm sản phẩm</button>
    </form>
  </>
}
export default AddCategory