import { useState } from "react"
import { useForgotPasswordMutation } from "../../store/api/api";

interface EmailFormData {
    email: string
}

const EmailResetpass = () => {
    const [formData, setFormData] = useState<EmailFormData>({
        email: "" 
    })
    const [forgotPasswordMution, { isLoading }] = useForgotPasswordMutation();

    const  handleSubmit  =  async (e:any)=>{
        e.preventDefault()
        const res = await forgotPasswordMution(formData)
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
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" name="email" value={formData?.email} onChange={handleInputChange} />
            </div>
            <button>Xác nhận email</button>

        </form>

    </>
}

export default EmailResetpass