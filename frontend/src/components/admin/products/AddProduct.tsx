import React from 'react'

type Props = {}

const AddProduct = (props: Props) => {
  return <>
    <p className="fs-1">Thêm sản phẩm</p>

    <form>
      <div className="form-group">
        <label>Tên sản phẩm</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Tên sản phẩm" />
      </div>
      <div className="form-group">
        <label>Giá sản phẩm</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Giá sản phẩm" />
      </div>
      <div className="form-group">
        <label >Ảnh sản phẩm</label>
        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
      </div>
      <div className="form-group">
        <label >Danh mục</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label >Các loại size</label>
        <select multiple className="form-control" id="exampleFormControlSelect2">
          <option>M</option>
          <option>L</option>
          <option>X</option>
          <option>Xl</option>
          <option>2Xl</option>
        </select>
      </div>
      <div className="form-group">
        <label >Mô tả</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
      </div>
      <button type="button" className="btn btn-primary m-2">Thêm sản phẩm</button>
    </form>
  </>
}

export default AddProduct