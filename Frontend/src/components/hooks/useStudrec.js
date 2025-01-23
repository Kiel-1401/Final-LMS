import { useState, useEffect } from "react";
import axiosInstance from "../../services/axiosInstance";

const useStudrec = () => {
  const [studrec, setStudrec] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudrec = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axiosInstance.get("/studrec"); // Use axiosInstance
        setStudrec(response.data);
      } catch (err) {
        console.error("Error fetching students data:", err);
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchStudrec();
  }, []);

  return { studrec, loading, error };
};

export default useStudrec;
