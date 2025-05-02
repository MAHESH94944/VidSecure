import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { axiosInstance } from "../lib/axios";

const OtpVerificationPage = () => {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleVerifyOtp = async () => {
        try {
            await axiosInstance.post("/auth/verify-otp", { email: location.state.email, otp });
            navigate("/onboarding");
        } catch (err) {
            setError(err.response?.data?.message || "Failed to verify OTP");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-base-200 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
                {error && <div className="alert alert-error mb-4">{error}</div>}
                <input
                    type="text"
                    placeholder="Enter OTP"
                    className="input input-bordered w-full mb-4"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
                <button className="btn btn-primary w-full" onClick={handleVerifyOtp}>
                    Verify OTP
                </button>
            </div>
        </div>
    );
};

export default OtpVerificationPage;
