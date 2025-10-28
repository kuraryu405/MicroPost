export default function Login() {
    return (
        <>
        <div className="bg-[url(/images/background-login.jpeg)] bg-cover bg-center h-screen w-screen flex justify-center items-center">
            <div className="glass w-1/2 h-1/2 rounded-2xl flex justify-center items-center">
                <form className="form-control w-full max-w-lg">
                    <div className="form-group">
                        <label htmlFor="email" className="label text-black text-lg">Email</label>
                        <input type="email" id="email" className="input input-bordered w-full" />
                        <label htmlFor="password" className="label mt-4 text-black text-lg">Password</label>
                        <input type="password" id="password" className="input input-bordered w-full" />
                        <div className="mt-6 flex justify-end">
                            <button type="submit" className="btn btn-accent bg-info relative z-10 hover:bg-accent/80 p-2">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

