import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { ClockLoader } from "react-spinners";
// import "./LoadingScreen.css"; // Create a custom CSS file for styling

const LoadingScreen: React.FC = () => {
    return (
        <div style={{
            position: "fixed",
            zIndex: 50000,
            width: "100%",
            height: "100vh",
            background: 'rgb(15,15,15,0.6)'
        }}>
            <div className="loading-screen" style={{
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                marginTop: "50px"
            }}>
                <ClockLoader color="#ffffff" size={300} />
            </div >
        </div >
    );
};

export default LoadingScreen;
