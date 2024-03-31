import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link href="/">
                    <span>
                        <img src="/logo.png" alt="Logo" />
                    </span>
                </Link>
            </div>
            <nav>
                <ul>
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
        nav ul li span {
          color: #fff;
          text-decoration: none;
          cursor: pointer; /* Add cursor pointer for better user experience */
        }
      `}</style>
        </header>
    );
};

export default Header;
