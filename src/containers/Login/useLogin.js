import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginSuccess,
  loginStart,
  loginFailure,
} from "../../redux/login/slice";
import axios from "axios";

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { loading } = useSelector((state) => state.login);
  const [formValue, setFormValue] = useState({
    username: null,
    password: null,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formValue
      );
      dispatch(loginSuccess(response.data.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return {
    formValue,
    setFormValue,
    handleSubmit,
    loading,
    showPassword,
    setShowPassword,
    togglePasswordVisibility
  };
}

export default useLogin;
