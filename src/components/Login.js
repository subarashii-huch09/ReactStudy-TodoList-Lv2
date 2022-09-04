import React from "react";
import {useEffect } from "react";
import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom"
import Side from "./Side";
import styles from "./LoginSignUp.module.css";
import authUser from "../authUser";
import api from "../api"
import Swal from "sweetalert2";

const Login = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchLogIn = async(user) => {
    try{
      const res = await api.userSignIn(user);
      const response = await res.json()


      const { headers, status } = res;
      const { nickname } = response
      const authorization = headers.get("authorization");

      if (status === 200) {
        authUser.setUserData({
          nickname,
          authorization,
        });

        navigate("/Todo");
      } else if (status === 401) {
        Swal.fire({
          icon: "error",
          title: response.message,
          text: response.error,
        });
      }
      

    } catch(error){
      console.log(error.response)
    }
    
  };

  useEffect(() => {
    if (authUser.getUserData() !== null) {
      navigate("/todos");
    }
  }, [navigate]);
  return (
    <div className={styles.container}>
      <Side />
      <div>
        <form
          className={`${styles.form} ${styles.loginForm}`}
          onSubmit={handleSubmit(fetchLogIn)}
        >
          <h2 className={styles.formTitle}>最實用的線上代辦事項服務</h2>
          <div className={styles.formControl}>
            <label className={styles.formControlLabel} htmlFor="email">
              Email
            </label>
            <input
              className={styles.formControlInput}
              id="email"
              name="email"
              placeholder="請輸入Email"
              {...register("Email", {
                required: { value: true, message: "此欄位必填寫" },
                pattern: { value: /^\S+@\S+$/i, message: "不符合 Email 規則" },
              })}
            />
            <span className={styles.formErrorMsg}>{errors.Email?.message}</span>
          </div>
          <div className={styles.formControl}>
            <label className={styles.formControlLabel} htmlFor="password">
              密碼
            </label>
            <input
              className={styles.formControlInput}
              name="password"
              id="password"
              type="password"
              placeholder="請輸入密碼"
              {...register("password", {
                required: { value: true, message: "此欄位必填寫" },
                minLength: { value: 8, message: "密碼至少為 8 碼" },
              })}
            />
            <span className={styles.formErrorMsg}>
              {errors.password?.message}
            </span>
          </div>
          <input
            className={styles.formControlSubmitBtn}
            type="submit"
            value="登入"
          />
          <Link className={styles.formControlBtnLink} to="/signUp">
            註冊帳號
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
