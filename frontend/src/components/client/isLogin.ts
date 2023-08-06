import { useNavigate } from "react-router-dom";


//kiểm tra xem đang nhập hay chưa
const isLogin = () => {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
    
}
export default isLogin