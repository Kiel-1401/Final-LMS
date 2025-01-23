import { useState, useEffect } from "react";
import axiosInstance from "../../services/axiosInstance";

const useSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axiosInstance.get("/subjects"); // Use axiosInstance
        setSubjects(response.data);
      } catch (err) {
        console.error("Error fetching subjects:", err);
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchSubjects();
  }, []);

  return { subjects, loading, error };
};

export default useSubjects;
