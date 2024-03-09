import styles from "@/styles/404.module.css";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/not_found.png" alt="404" className={styles.image} />
      <div>Halaman tidak ditemukan</div>
    </div>
  );
};

export default Custom404;
