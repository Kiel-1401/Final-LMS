import { useState, useEffect } from "react";
import axiosInstance from "../../services/axiosInstance";

const useUser = () => {
  const [subUser, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/user");
        console.log("Fetched Users:", response.data); // Debugging log
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching users data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { subUser, loading, error };
};

export default useUser;
