import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={styles.container}>
      <div>
        <h2 className={styles.notFoundMessage}>Page Not Found</h2>
      </div>
    </main>
  );
};

export default NotFoundPage;
