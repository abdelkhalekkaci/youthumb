import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
                </Link>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/" passHref>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" passHref>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
