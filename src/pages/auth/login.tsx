import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";
import LoginViews from "@/views/auth/login";

const LoginPage = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    push("/product");
  };
  return (
    <>
      <LoginViews />
    </>
  );
};

export default LoginPage;
