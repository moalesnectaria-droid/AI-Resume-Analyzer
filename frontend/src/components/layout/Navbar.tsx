import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                Aki<span>AI</span>
            </div>

            <div className={styles.menu}>
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">About</a>
            </div>
        </nav>
    );
}

export default Navbar;