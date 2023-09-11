
const mainRoute = "/auth/login";

export const Hoc = (Component: any) => {
    const Auth = (props: any) => {
        const isLoggedIn = sessionStorage.getItem('_token');
        if (!isLoggedIn) {
            return window.location.replace(mainRoute);
        }
        return (
            <Component {...props} />
        );
    };
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }
    return Auth;
};
