import React from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
import Side from "./Side";
import styles from "./LoginSignUp.module.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className={styles.container}>
      <Side />
      <div>
        <form className={`${styles.form} ${styles.loginForm}`} onSubmit={handleSubmit(onSubmit)}>
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
            <span>{errors.email?.message}</span>
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
            <span>{errors.password?.message}</span>
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
