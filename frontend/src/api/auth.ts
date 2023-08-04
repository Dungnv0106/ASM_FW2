import instance from "./index";
import { IUser } from "../interfaces/user";
 

export const login = (user:IUser) =>{
    return instance.post('/signin', user)
}
export const register = (user:IUser) =>{
    return instance.post('/signin', user)
}

