import Link from 'next/link';
import styles from '../styles/Home.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <span>
                        <img src="/logo.png" alt="Logo" />
                    </span>
                </Link>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span>Contact Us</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
