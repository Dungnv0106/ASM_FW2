import { useState } from "react"
import { useForgotPasswordMutation } from "../../store/api/api";
import { useNavigate } from "react-router-dom";
import isLogin from "../../components/client/isLogin";

interface EmailFormData {
    email: string
}

const EmailResetpass = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<EmailFormData>({
        email: ""
    })
    const [errors, setErrors] = useState<string[]>([]);

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const [forgotPasswordMution, { isLoading }] = useForgotPasswordMutation();

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(formData.email)
        const errors: string[] = [];
        if (!formData.email) {
            errors.push('Vui lòng nhập địa chỉ email.');
        } else if (!emailPattern.test(formData.email)) {
            errors.push('Email không đúng định dạng');
        }
        if (errors.length > 0) {
            setErrors(errors); // Cập nhật mảng lỗi
            return;
        }
        try {
            const res: any = await forgotPasswordMution(formData)
            console.log(res)
            if (res.data) {
                alert("kiểm tra email vừa nhập")
                navigate("/")
            } else {
                alert("Email không tồn tại")
            }
        } catch (error) {
            alert("Có lỗi xảy ra!")
        }

    }
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    if(isLogin()){
        formData.email = isLogin().user.email
    }



    return <>
        <form action="" onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center vh-100">
            <div className="input-group flex-nowrap w-50">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    readOnly={isLogin()}
                />
            </div>
            <button className="btn btn-primary">Xác nhận email</button>
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

export default EmailResetpass