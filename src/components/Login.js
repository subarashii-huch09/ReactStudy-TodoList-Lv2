import React from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
import Side from "./Side";
import styles from "./Login.module.css";

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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.loginTitle}>最實用的線上代辦事項服務</h2>
          <div className={styles.formControl}>
            <label className={styles.formControlLabel} for="email">
              Email
            </label>
            <input
              className={styles.formControlInput}
              id="email"
              name="email"
              type="text"
              placeholder="請輸入Email"
              {...register("Email", {
                required: true,
                pattern: /^\S+@\S+$/i,
                message: "此欄位不可留空",
              })}
            />
            <span>{errors.email?.message}</span>
          </div>
          <div className={styles.formControl}>
            <label className={styles.formControlLabel} for="password">
              密碼
            </label>
            <input
              className={styles.formControlInput}
              name="password"
              id="password"
              type="password"
              placeholder="請輸入密碼"
              {...register("密碼", {
                required: true,
                maxLength: 80,
                message: "此欄位不可留空",
              })}
            />
            <span>{errors.password?.message}</span>
          </div>
          <input
            className={styles.formControlSubmit}
            type="submit"
            value="Log in"
          />
          <Link className={styles.formControl_btnLink} to="/signUp">
            註冊帳號
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
