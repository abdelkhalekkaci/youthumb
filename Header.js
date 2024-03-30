// JavaScript source code
// components/Header.js

import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link href="/">
                    <a>
                        <img src="/logo.png" alt="Logo" />
                    </a>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact Us</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #333;
          color: #fff;
        }
        .logo img {
          width: 100px; /* Adjust as needed */
          height: auto;
        }
        nav ul {
          list-style-type: none;
          display: flex;
        }
        nav ul li {
          margin-right: 1rem;
        }
        nav ul li:last-child {
          margin-right: 0;
        }
        nav ul li a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
        </header>
    );
};

export default Header;
