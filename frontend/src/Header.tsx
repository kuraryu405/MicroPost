import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
    navigate('/login');
  };

  return (
    <header className="py-4 mb-6 border-b">
    <div className="container mx-auto flex items-center justify-between px-6">
      <h1 className="text-3xl font-bold text-blue-700 text-center">
        Micro Post
      </h1>
      <button className="btn btn-accent bg-info text-white ml-4 mt-2 z-10 hover:bg-accent/80 p-2" onClick={handleLogout}>ログアウト</button>
    </div>
  </header>
  );
}