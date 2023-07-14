import { useDispatch, useSelector } from "react-redux";
import React, {useState} from "react";
import {
  jobsStart,
  jobsSuccess,
  jobsFailure
} from "../../redux/jobs/slice";
import axios from "axios";

function useJobs() {
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { jobs } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.login);
  const fetchJobs = async () => {
    try {
      dispatch(jobsStart());
      const response = await axios.get("http://localhost:5000/api/job", {
        headers: {
          token:
            user?.token,
        },
      })
      console.log(response.data.data);
      dispatch(jobsSuccess(response.data.data));
      setTotalPages(response.data.data.length)
    } catch (error) {
      dispatch(jobsFailure());
    }
  };

  return {
    fetchJobs,
    jobs,
    totalPages,
    setCurrentPage,
    currentPage
  };
}

export default useJobs;
