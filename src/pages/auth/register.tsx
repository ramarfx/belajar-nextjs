import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>register page</h1>
      <p>Sudah memiliki akun? Login <Link href={'/auth/login'}>disini</Link></p>
    </div>
  );
};

export default RegisterPage;
