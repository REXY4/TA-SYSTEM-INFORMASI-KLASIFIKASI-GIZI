import { Provider } from "react-redux";
import { persistore, store } from "states/stores";
import { PersistGate } from 'redux-persist/integration/react';


const PGate = PersistGate as any

interface Props {
    Component: any,
    pageProps: any
}

const App = ({ Component, pageProps }: Props) => {
    return (
        <Provider store={store}>
            <PGate persistor={persistore} loading={null}>
                <Component {...pageProps} />
            </PGate>
        </Provider>
    )
}

export default App;