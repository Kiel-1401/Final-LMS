import { useState, useEffect } from "react";
import axiosInstance from "../../services/axiosInstance";

const useLogin = () => {
  const [subLogin, setLogin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axiosInstance.get("/login"); // Use axiosInstance
        setLogin(response.data);
      } catch (err) {
        console.error("Error fetching login data:", err);
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchLogin();
  }, []);

  return { subLogin, loading, error };
};

export default useLogin;
