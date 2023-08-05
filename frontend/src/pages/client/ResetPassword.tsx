import React, { useState } from 'react'
import { useRegisterMutation, useResetPasswordMutation } from '../../store/api/api'
import { useParams } from 'react-router-dom'

type Props = {}

interface ResetFormData {
    token: string,
    password: string
}

const ResetPassword = (props: Props) => {
    const [formData, setFormData] = useState<ResetFormData>({
        token: "",
        password: "" 

    })

    const { id } = useParams<{ id?: string }>()
    if(id){
        formData.token = id
    }
    const [resetPasswordMution, { isLoading }] = useResetPasswordMutation();

    const  handleSubmit  =  async (e:any)=>{
        e.preventDefault()
        console.log(formData)
        const res = await resetPasswordMution(formData)
        console.log(res)
    }
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
    return <>
        <form action="" onSubmit={handleSubmit}>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="new password" aria-label="Username" aria-describedby="addon-wrapping" value={formData.password} name='password' onChange={handleInputChange}/>
            </div>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="confirm new password" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <button>Đổi mật khẩu</button>

        </form>

    </>
}

export default ResetPassword