import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useLogin() {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    const success = handleInputErrors({ username, password });
    if (!success) return;

    try {
      setLoading(true);
      const res = await fetch("https://chat-app-server-navy.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}

export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
