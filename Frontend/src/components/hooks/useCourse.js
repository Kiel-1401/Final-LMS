import { useState, useEffect } from "react";
import axiosInstance from "../../services/axiosInstance";

const useCourse = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axiosInstance.get("/course"); // Use axiosInstance
        setCourse(response.data);
      } catch (err) {
        console.error("Error fetching course:", err);
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchCourse();
  }, []);

  return { course, loading, error };
};

export default useCourse;
