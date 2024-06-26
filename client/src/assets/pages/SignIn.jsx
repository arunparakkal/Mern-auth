import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    setLoading(true);
    setError(false)
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false)
      if(data.succes == false){
        setError(true)
        return
      }
      Navigate("/")
    } catch (error) {
      setLoading(false)
      setError(true)
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">sign up</h1>
      <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
      
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg "
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit} disabled={loading}
          className="bg-slate-700  text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:85"
        >
          {loading ? "Loading...":"Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>

  <p className="text-red-700 mt-5">{error&& "something went wrong"}</p>
    </div>
    
  );
}
