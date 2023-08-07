import React, { useState } from 'react'
import { useRegisterMutation, useResetPasswordMutation } from '../../store/api/api'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {}

interface ResetFormData {
    token: string,
    password: string
}

const ResetPassword = (props: Props) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState<ResetFormData>({
        token: "",
        password: ""

    })
    const [confirmPassword , setConfirmPassword] = useState("")
    const [errors, setErrors] = useState<string[]>([]);

    const { id } = useParams<{ id?: string }>()
    if (id) {
        formData.token = id
    }
    const [resetPasswordMution, { isLoading }] = useResetPasswordMutation();

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(formData)
        const errors: string[] = [];
    

    
    if (!formData.password) {
      errors.push('Vui lòng nhập mật khẩu.');
    }else if(formData.password.length < 6 ){
      errors.push("Mật khẩu phải ít nhất 6 kí tự")
    }
    if (confirmPassword != formData.password) {
      errors.push('Xác nhận mật khẩu phải trùng với mật khẩu');
    }
    

    if (errors.length > 0) {
      setErrors(errors); // Cập nhật mảng lỗi
      return;
    }
    try {
        const res:any = await resetPasswordMution(formData)
        console.log(res)
        if(res.data){
            alert("Đổi mật khẩu thành công , hãy đăng nhập lại")
            navigate('/login')
        }
        else{
            alert("Có lỗi xảy ra")
        }
        
    } catch (error) {
        alert("Có lỗi xảy ra")
    }
        
    }
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    

    return <>
        <form action="" onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center vh-100">
            <h2>Đổi mật khẩu</h2>
            <div className="input-group flex-nowrap w-50 my-2">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu mới"
                    aria-label="Mật khẩu mới"
                    aria-describedby="addon-wrapping"
                    value={formData.password}
                    name="password"
                    onChange={handleInputChange}
                />
            </div>
            <div className="input-group flex-nowrap w-50 my-2">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Xác nhận mật khẩu mới"
                    aria-label="Xác nhận mật khẩu mới"
                    aria-describedby="addon-wrapping"
                    name='confirmpassword'
                    onChange={(event)=>{setConfirmPassword(event?.target.value)}}
                />
            </div>
            <button className="btn btn-primary">Đổi mật khẩu</button>
        </form>
        {errors.length > 0 && (
                <div className="alert alert-danger">
                  <ul>
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
        )}


    </>
}

export default ResetPassword