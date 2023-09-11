import axios from "axios";

const login = async (email: string, password: string) => {
    const config = {
        headers: {
            "Content-Type": "Application/Json",
            // Authorization: `Bearer ${getCookie("_primary}`
        }
    };
    const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_ADMIN}/login`, {
        username: email,
        password,
    }, config);
    return response.data;
}

const AuthService = {
    login,
}

export default AuthService;