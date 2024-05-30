import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-timberwolf">
        <form className="w-full max-w-md p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
          <h3 className="text-2xl font-semibold mb-4">Log In</h3>
          
          <label className="block mb-2 text-sm font-medium text-gray-700">Email address:</label>
          <input 
            type="email" 
            className="block w-full p-2 border border-gray-300 rounded-md mb-4 focus:ring focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            required
          />
          
          <label className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
          <input 
            type="password" 
            className="block w-full p-2 border border-gray-300 rounded-md mb-4 focus:ring focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            required
          />

          <button 
            className="w-full bg-onyx text-white p-2 rounded-md font-semibold hover:bg-dim-gray disabled:bg-gray-400"
            disabled={isLoading}
          >
            Log in
          </button>
          {error && <div className="mt-4 text-red-500">{error}</div>}
        </form>
      </div>
      <Footer className="w-full" />
    </div>
  );
}

export default Login;
