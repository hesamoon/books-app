import styles from "./Layout.module.css"

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p><a href="https://github.com/hesamoon">Hesamoon</a> | React.js</p>
      </header>

      {children}

      <footer className={styles.footer}>
        <p>Developed by hesamoon with ❤</p>
      </footer>
    </>
  );
}

export default Layout;
