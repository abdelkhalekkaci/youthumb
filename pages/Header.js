import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <img src="/logo.png" alt="Logo" />
                    </a>
                </Link>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/AboutUs">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ContactUs">
                            <a>Contact Us</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
