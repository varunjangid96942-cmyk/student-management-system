import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();

        if (trimmedUsername === "admin" && trimmedPassword === "1234") {
            setError("");
            navigate("/dashboard", { replace: true });
        } else {
            setError("Invalid Username or Password");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex items-center justify-center"
        >

            <div className="bg-white shadow-xl rounded-2xl p-8 w-96">

                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Student Management system
                </h1>

                <form onSubmit={handleLogin}>

                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full border rounded-lg p-3 mb-4 outline-none focus:border-blue-500"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-lg p-3 mb-6 outline-none focus:border-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>

                    {error && (
                        <p className="mt-4 text-center text-sm text-red-600">
                            {error}
                        </p>
                    )}

                </form>

                <p className="text-center text-gray-500 mt-5">
                    Login page <br />
                </p>

            </div>
        </div>
    );
}

export default Login;