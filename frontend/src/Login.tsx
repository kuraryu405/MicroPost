import { useState, type FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', { email, password });
            const token = response.data?.access_token;
            if (!token) {
                setMessage('ログイン失敗: トークンが取得できませんでした');
                return;
            }
            localStorage.setItem('token', token);
            localStorage.setItem('userId', response.data.user.id);
            setMessage('ログイン成功！');
            navigate('/');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serverMessage = Array.isArray(error.response?.data?.message)
                    ? error.response?.data?.message[0]
                    : error.response?.data?.message;
                setMessage('ログイン失敗: ' + (serverMessage || error.message));
            } else if (error instanceof Error) {
                setMessage('ログイン失敗: ' + error.message);
            } else {
                setMessage('ログイン失敗');
            }
        }
    };

    return (
        <div className="bg-[url(/images/background-login.jpeg)] bg-cover bg-center h-screen w-screen flex justify-center items-center">
            <div className="glass w-1/2 h-1/2 rounded-2xl flex justify-center items-center">
                <form className="form-control w-full max-w-lg" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email" className="label text-black text-lg">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // ←状態更新
                            required
                        />
                        <label htmlFor="password" className="label mt-4 text-black text-lg">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // ←状態更新
                            required
                        />
                        <div className="mt-6 flex justify-end">
                            <button
                                type="submit"
                                className="btn btn-accent bg-info relative z-10 hover:bg-accent/80 p-2"
                            >
                                Login
                            </button>
                        </div>
                        {message && (
                            <p className="text-center mt-2">{message}</p>
                        )} 
                    </div>
                </form>
            </div>
        </div>
    );
}
