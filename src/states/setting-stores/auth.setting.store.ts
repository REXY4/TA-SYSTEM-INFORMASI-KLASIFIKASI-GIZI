import { ResponseEntity } from "entities/response.entity"


interface AuthSettingStore {
    isLogin: boolean
    user: AuthEntity | null
    token: string

    login(email: string, password: string): Promise<ResponseEntity<AuthEntity> | void>
    logout(): Promise<void>
}

export type { AuthSettingStore }