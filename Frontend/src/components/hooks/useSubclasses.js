import { useState, useEffect } from "react";
import axiosInstance from "../../services/axiosInstance";

const useSubclasses = () => {
  const [subclasses, setSubclasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubclasses = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axiosInstance.get("/subclasses"); // Use axiosInstance
        setSubclasses(response.data);
      } catch (err) {
        console.error("Error fetching subclasses:", err);
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchSubclasses();
  }, []);

  return { subclasses, loading, error };
};

export default useSubclasses;
