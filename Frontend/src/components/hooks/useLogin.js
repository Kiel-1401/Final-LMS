import { useState, useEffect } from "react";
import axiosInstance from "../../services/axiosInstance";

const useLogin = () => {
  const [subLogin, setLogin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/logins");
        console.log("Fetched logins:", response.data); // Debugging log
        setLogin(response.data);
      } catch (err) {
        console.error("Error fetching login data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogin();
  }, []);

  return { subLogin, loading, error };
};

export default useLogin;
