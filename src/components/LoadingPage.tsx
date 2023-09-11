import { CSSProperties } from "react";
import { ClockLoader } from "react-spinners";
import SettingUseCase from "use-case/setting.use-case";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function LoadingPage() {
    const { isLoading } = SettingUseCase();
    return (
        <>
            {isLoading &&
                <div className="sweet-loading" style={{
                    position: "fixed",
                    zIndex: 1000,
                    background: "rgb(0,0,0,0.5)",
                    width: "100vw",
                    height: "100vh",
                }}>
                    <div style={{
                        paddingTop: "100px"
                    }}>
                        <ClockLoader
                            color="#36d7b7"
                            loading={isLoading}
                            cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                </div>
            }
        </>
    );
}

export default LoadingPage;