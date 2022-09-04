import { useForm} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Side from "./Side";
import styles from "./LoginSignUp.module.css";
import api from "../api"
import Swal from 'sweetalert2'


const SignUp = () => {
 
  let navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchSignUp = async (user) => {
    
    try {
      const res = await api.userSignUp(user);
      const response = await res.json()

      if(res.status === 201){
        Swal.fire({
        icon: "success",
        title: response.message,
      });
      navigate("/", { replace: true });
    } 
      if(!res.ok){
      Swal.fire({
        icon: "error",
        title: response.message,
        text: response.error,
      });
    }
    } catch (error) {
      console.log(error.response)
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
            <label htmlFor="password2" className={styles.formControlLabel}>
              再次輸入密碼
            </label>
            <input
              className={styles.formControlInput}
              name="password2"
              id="password2"
              type="password"
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
