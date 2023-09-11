import { ResponseEntity } from "entities/response.entity";
import { MapResponse } from "helpers/MapResponse";
import AuthService from "services/auth.service";

const login = async (email: string, password: string): Promise<ResponseEntity<AuthEntity>> => MapResponse(
    await AuthService.login(email, password)
)

const AuthRepositories = {
    login,
}

export default AuthRepositories;