export interface IUser {
    _id?: number | string;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string
    num_phone?: string
    address?: string
}

// dữ liệu trả về khi đăng nhập
interface ILoginData {
    accessToken: string,
    message: string,
    user: IUser
}
export interface LoginResponse {
    data: ILoginData
    
}
//dữ liệu cần thiết để đang nhập
export interface LoginCredentials {
    email: string;
    password: string;
}
// thông tin cần thiết để đăng kí
export interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string
    num_phone: string;
    address: string

}

//thông tin trả về sau khi đăng kí
export interface RegisterResponse {
    user: IUser;
}

