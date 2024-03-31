import Link from 'next/link';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: '#333',
            color: '#fff'
        }}>
            <div className="logo">
                <Link href="/">
                    <span>
                        <img src="/logo.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
                    </span>
                </Link>
            </div>
            <nav>
                <ul style={{ listStyleType: 'none', display: 'flex' }}>
                    <li style={{ marginRight: '1rem' }}>
                        <Link href="/">
                            <span style={{ color: '#fff', cursor: 'pointer' }}>Home</span>
                        </Link>
                    </li>
                    <li style={{ marginRight: '1rem' }}>
                        <Link href="/about">
                            <span style={{ color: '#fff', cursor: 'pointer' }}>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span style={{ color: '#fff', cursor: 'pointer' }}>Contact Us</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
