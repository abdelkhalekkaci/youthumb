import Head from 'next/head';
import Header from './Header';
import styles from '../styles/Home.module.css';

const AboutUs = () => {
    return (
        <div className={styles.container} style={{ backgroundColor: '#EFF7F6' }}>
            <Head>
                <title>About Us - Thumbnail Taker</title>
                <meta name="description" content="Learn more about Thumbnail Taker, your ultimate destination for downloading high-quality thumbnails from YouTube videos." />
            </Head>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>About Us</h1>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <section className="about-us-section" style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', marginTop: '20px', textAlign: 'left' }}>
                            <h2 className="text-gray-700" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Welcome to Thumbnail Taker</h2>
                            <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                                Thumbnail Taker is your ultimate destination for downloading high-quality thumbnails from YouTube videos. We understand the importance of captivating visuals in today's digital landscape, and we're here to provide you with a convenient solution to enhance your content creation experience.
                            </p>
                            <h3 className="text-gray-700" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Mission</h3>
                            <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                                Our mission at Thumbnail Taker is simple: to empower content creators, marketers, and enthusiasts with the tools they need to create visually stunning content. We believe that compelling thumbnails play a crucial role in attracting viewers and driving engagement on platforms like YouTube. By offering a fast and free solution for downloading YouTube thumbnails, we aim to simplify the process and unleash your creativity.
                            </p>
                            <h3 className="text-gray-700" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>What We Offer</h3>
                            <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                                Thumbnail Taker offers a user-friendly interface that allows you to quickly generate thumbnail options for any YouTube video. Whether you're a blogger looking to create eye-catching previews for your latest posts, a digital marketer seeking captivating visuals for your campaigns, or a video creator in need of striking thumbnails for your content, Thumbnail Taker has got you covered.
                            </p>
                            <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                                With Thumbnail Taker, you can choose from a variety of thumbnail resolutions, including Full HD (1080p), HD (720p), standard definition (SD), and smaller sizes. Our tool extracts thumbnails in different sizes, ensuring that you have the flexibility to select the perfect image for your needs.
                            </p>
                            <h3 className="text-gray-700" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Why Choose Thumbnail Taker?</h3>
                            <ul>
                                <li>Efficiency: Say goodbye to tedious screenshotting and cropping. With Thumbnail Taker, you can download high-quality thumbnails in just a few clicks, saving you time and effort.</li>
                                <li>Quality: We understand the importance of image quality in digital content. That's why Thumbnail Taker ensures that you get crisp, clear thumbnails that maintain the clarity and visual appeal necessary to grab viewers' attention.</li>
                                <li>Accessibility: Thumbnail Taker is designed to be accessible to everyone. Whether you're a seasoned content creator or just starting, our intuitive interface makes it easy for anyone to use.</li>
                                <li>Free of Charge: Thumbnail Taker is completely free to use. No subscriptions, no hidden fees – just a straightforward tool that's available to you whenever you need it.</li>
                            </ul>
                            <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                                Ready to take your content to the next level? Visit Thumbnail Taker today and start downloading high-quality thumbnails for your YouTube videos. Whether you're promoting your brand, sharing your creativity, or simply expressing yourself, Thumbnail Taker is here to help you make a lasting impression. Join the Thumbnail Taker community and unlock the power of captivating visuals for your content.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutUs;
