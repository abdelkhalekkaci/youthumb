import Head from 'next/head'; // Import Head component from next/head
import Header from './Header';
import styles from '../styles/Home.module.css';

const ContactUs = () => {
    return (
        <div className={styles.container} style={{ backgroundColor: '#EFF7F6' }}>
            <Head>
                <title>Contact Us - Your Website Title</title>
                <meta name="description" content="Contact Us page description goes here." />
            </Head>
            <Header /> {/* Include the Header component */}
            <main className={styles.main}>
                <h1>Contact Us</h1>
                <p>This is the Contact Us page content.</p>
            </main>
        </div>
    );
};

export default ContactUs;
