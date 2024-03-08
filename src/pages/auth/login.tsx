import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    push("/product");
  };
  return (
    <div>
      <h1>login page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum memiliki akun? registrasi{" "}
        <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
