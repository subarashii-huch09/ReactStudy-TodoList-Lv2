import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Side from "./Side";
import styles from "./LoginSignUp.module.css";

const SignUp = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchSignUp = async ({email,password,nickName}) => {
    const user = {
      email: email,
      nickName,
      password
    };
    const api = "https://todoo.5xcamp.us/users";
    const postOption = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    };
    try {
      console.log(user)
      const response = await fetch(api,postOption);
      console.log(response);
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={styles.container}>
      <Side />
      <div>
        <form className={styles.form} onSubmit={handleSubmit(fetchSignUp)}>
          <h2 className={styles.formTitle}>註冊帳號</h2>
          <div className={styles.formControl}>
            <label className={styles.formControlLabel} htmlFor="email">
              Email
            </label>
            <input
              className={styles.formControlInput}
              id="email"
              name="email"
              placeholder="請輸入Email"
              {...register("email", {
                required: { value: true, message: "此欄位必填寫" },
                pattern: { value: /^\S+@\S+$/i, message: "不符合 Email 規則" },
              })}
            />
            <span className={styles.formErrorMsg}>{errors.Email?.message}</span>
          </div>
          <div className={styles.formControl}>
            <label className={styles.formControlLabel} htmlFor="nickName">
              您的暱稱
            </label>
            <input
              className={styles.formControlInput}
              id="nickName"
              name="nickName"
              type="text"
              placeholder="請輸入您的暱稱"
              {...register("nickName", {
                required: { value: true, message: "此欄位必填寫" },
                maxLength: { value: 12, message: "至多為 12 字元" },
              })}
            />
            <span className={styles.formErrorMsg}>{errors.email?.message}</span>
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
          <div className={styles.formControl}>
            <label className={styles.formControlLabel}>
              {/* htmlFor="password2" */}
              再次輸入密碼
            </label>
            <input
              className={styles.formControlInput}
              // name="password2"
              // id="password2"
              // type="password"
              placeholder="請再次輸入密碼"
              {...register("password2", {
                required: { value: true, message: "此欄位必填寫" },
                minLength: { value: 8, message: "密碼至少為 8 碼" },
              })}
            />
            <span className={styles.formErrorMsg}>
              {errors.password2?.message}
            </span>
          </div>
          <input
            className={styles.formControlRegisterBtn}
            type="submit"
            value="註冊帳號"
          />
          <Link className={styles.formControlBtnLink} to="/">
            登入
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
