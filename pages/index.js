import { useState } from 'react';
import Head from 'next/head'; // Import Head component from next/head
import Header from './Header';
import styles from '../styles/Home.module.css';

const Index = () => {
    const [videoURL, setVideoURL] = useState('');
    const [thumbnailOptions, setThumbnailOptions] = useState([]);
    const [selectedThumbnail, setSelectedThumbnail] = useState(null);

    const getYouTubeThumbnail = (url) => {
        let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        let match = url.match(regExp);

        if (match && match[1].length === 11) {
            const videoID = match[1];
            const thumbnailBaseUrl = 'http://img.youtube.com/vi/';

            const options = [
                { resolution: 'HD (1280x720)', code: 'maxresdefault' },
                { resolution: 'SD (640x480)', code: 'sddefault' },
                { resolution: 'Normal (480x360)', code: 'hqdefault' },
                { resolution: 'Medium (320x180)', code: 'mqdefault' },
                { resolution: 'Low (120x90)', code: 'default' },
            ];

            const thumbnailOptions = options.map((option) => ({
                resolution: option.resolution,
                url: `${thumbnailBaseUrl}${videoID}/${option.code}.jpg`,
            }));

            setThumbnailOptions(thumbnailOptions);
            setVideoURL('');
            setSelectedThumbnail(null);
        } else {
            setThumbnailOptions([]);
            setSelectedThumbnail(null);
        }
    };

    const openThumbnailInNewTab = (url) => {
        const newTab = window.open(url, '_blank');
        if (newTab) {
            newTab.focus();
        }
    };

    const handleBackToThumbnails = () => {
        setSelectedThumbnail(null);
    };

    return (
        <div className={styles.container} style={{ backgroundColor: '#EFF7F6' }}>
            <Head>
                <title>Fast & Free YouTube Thumbnail Downloader | Thumbnail Taker</title>
                <meta name="description" content="Download high-quality thumbnails from YouTube videos quickly and for free with Thumbnail Taker. Perfect for bloggers, digital marketers, and video creators needing YouTube thumbnails." />
                {/* Google Ads code */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3751479720121399" crossorigin="anonymous"></script>
                {/* Google Analytics code */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-YPC8R7PHT4"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-YPC8R7PHT4');
                    `
                }} />
            </Head>
            <Header /> {/* Include the Header component */}
            <header className="text-center mb-8" style={{ marginBottom: '20px' }}>
                <h1 className="text-3xl font-bold mb-2" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>Thumbnail Taker</h1>
                <p className="text-gray-600" style={{ color: '#090809', marginBottom: '10px' }}>Download high-quality thumbnails from YouTube videos.</p>
            </header>
            <div className="text-center">
                <input
                    type="text"
                    className="w-full md:w-1/2 px-4 py-2 border rounded"
                    placeholder="Enter YouTube URL"
                    value={videoURL}
                    onChange={(e) => setVideoURL(e.target.value)}
                    style={{ width: '100%', maxWidth: '300px', marginBottom: '10px', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <button className="btn-blue mt-2" onClick={() => getYouTubeThumbnail(videoURL)} style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', padding: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.2s', width: '100%', maxWidth: '300px' }}>
                    Download Thumbnails
                </button>
            </div>
            {thumbnailOptions.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4" style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Thumbnail Options</h2>
                    {selectedThumbnail !== null ? (
                        <div className="fullscreen-thumbnail">
                            <button className="btn-blue mb-4" onClick={handleBackToThumbnails} style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', padding: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
                                Back
                            </button>
                            <img src={thumbnailOptions[selectedThumbnail].url} alt={`Thumbnail ${selectedThumbnail + 1}`} />
                            <button
                                className="btn-blue mt-2"
                                onClick={() => openThumbnailInNewTab(thumbnailOptions[selectedThumbnail].url)}
                                type="button"
                                style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', padding: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.2s' }}
                            >
                                View Fullscreen
                            </button>
                        </div>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {thumbnailOptions.map((option, index) => (
                                <div key={index} className="thumbnail-option">
                                    <img
                                        src={option.url}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => setSelectedThumbnail(index)}
                                    />
                                    <button
                                        className="btn-blue mt-2"
                                        onClick={() => openThumbnailInNewTab(option.url)}
                                        type="button"
                                        style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', padding: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.2s' }}
                                    >
                                        View Fullscreen
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <section
                className="how-to-section"
                style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', marginTop: '20px', textAlign: 'center' }}
            >
                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    To acquire a YouTube thumbnail, follow these steps:
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
                    Enter a valid YouTube video URL into the provided input field.<br />
                    Click the "Download Thumbnails" button to generate thumbnail options.<br />
                    Once the thumbnail choices appear below, select your desired thumbnail by clicking the "View Fullscreen" button.<br />
                    Save the displayed image by using the "Save Image As..." option.<br />
                </p>
            </section>
            <div className={styles.container}>
                <Head>
                    <title>YouThumb - YouTube Thumbnail Downloader</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {/* Adsterra Ad Unit Code */}
                <script async="async" data-cfasync="false" src="//pl23159716.highcpmgate.com/344e76fdb1e31e4d7b2669637036cf1e/invoke.js"></script>
                <div id="container-344e76fdb1e31e4d7b2669637036cf1e"></div>
                <main className={styles.main}>
                    <h1 className={styles.title}>Frequently Asked Questions</h1>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <section className="how-to-section" style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', marginTop: '20px', textAlign: 'center' }}>
                                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                                    What YouTube Thumbnail Quality You Will Get?
                                </h3>
                                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
                                    Download free, high-quality thumbnails of any YouTube video in Full HD (1080p), HD (720p), standard definition (SD), and smaller sizes. it works with the following formats: HD, HQ, 1080p, and 4K videos on YouTube.
                                    <br />
                                    The quality of the saved thumbnails is something that users often think about a lot. YouTube Thumbnail Downloader makes sure that users can access high-resolution pictures that keep the clarity and visual appeal that are important for getting people's attention. The tool extracts thumbnails in different sizes, so it used for a range of tasks.
                                </p>

                                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                                    What is the Use of This YouTube Thumbnail Grabber Website?
                                </h3>
                                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
                                    The primary purpose of YouTube Thumbnail Downloader is to provide users with a convenient way to obtain YouTube video thumbnails. Content creators can benefit from this tool by using the downloaded thumbnails for promotional materials, video previews, or even incorporating them into their own content. Marketers can leverage it for creating eye-catching advertisements, and enthusiasts can use it for personal collections or creative projects.
                                </p>

                                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                                    Is It Legal to Download YouTube Thumbnails?
                                </h3>
                                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
                                    Downloading YouTube thumbnails for personal use or creative projects is generally considered legal. However, it's crucial to respect copyright and intellectual property rights. Users should refrain from using downloaded thumbnails for any unlawful or unethical purposes, such as misrepresentation or unauthorized commercial use.
                                </p>

                                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                                    Is The YouTube Thumbnail Downloader Free or Paid?
                                </h3>
                                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
                                    YouTube Thumbnail Downloader is designed to be user-friendly and accessible to everyone. The majority of these tools are available for free, allowing users to enjoy the benefits without any financial commitment. However, some platforms may offer additional features or advanced options through premium versions, which might come with a cost.
                                </p>

                                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                                    Is There Any Copyright Risk on YouTube Thumbnails?
                                </h3>
                                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
                                    While downloading YouTube thumbnails for personal use is generally considered legal, users should be cautious about potential copyright risks. If the thumbnail includes copyrighted material or trademarks belonging to others, it's essential to seek permission or ensure that the usage falls within the boundaries of fair use. Using thumbnails for commercial purposes without proper authorization can lead to copyright infringement issues.
                                </p>

                                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                                    Conclusion
                                </h3>
                                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
                                    In conclusion, Thumbnail Taker is a valuable tool for content creators, marketers, and enthusiasts alike. By offering a quick and efficient way to download high-quality thumbnails, it enhances the visual appeal of content and provides endless possibilities for creativity. Users should, however, be mindful of legal considerations and ensure that their use of downloaded thumbnails aligns with ethical and legal standards. With the right approach, YouTube Thumbnail Downloader becomes a versatile asset in the digital landscape, unlocking the potential for captivating and engaging content.
                                </p>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Index;
