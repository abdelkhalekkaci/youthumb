import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <a>
                        <img src="/logo.png" alt="Logo" />
                    </a>
                </Link>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/" passHref>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref>
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" passHref>
                            <a>Contact Us</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
