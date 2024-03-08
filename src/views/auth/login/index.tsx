import Link from "next/link";
import { useRouter } from "next/router";
import styles from './login.module.css';

const LoginViews = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl">login page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p>
        Belum memiliki akun? registrasi{" "}
        <Link href={"/auth/register"} style={{ color: 'blue' }}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
