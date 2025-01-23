import { useState, useEffect } from "react";
import axiosInstance from "../../services/axiosInstance";

const useScheduling = () => {
  const [scheduling, setScheduling] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScheduling = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axiosInstance.get("/scheduling"); // Use axiosInstance
        setScheduling(response.data);
      } catch (err) {
        console.error("Error fetching schedules:", err);
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchScheduling();
  }, []);

  return { scheduling, loading, error };
};

export default useScheduling;
