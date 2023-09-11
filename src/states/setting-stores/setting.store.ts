interface SettingStore {
    isLoading: boolean,
    count: number,
    page: number,
    limit: number,
    search: string
    email: string,
    alert: AlertEntity

    setLoading(loading: boolean): Promise<void>
    setPageData(page: number, limit: number): Promise<void>
    setAlert(message: string, open: boolean, status: number): Promise<void>
}

export type { SettingStore }