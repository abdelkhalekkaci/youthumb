import { Fragment, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import ReactGA from 'react-ga'; // Import react-ga

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Initialize Google Analytics
        ReactGA.initialize('G-YPC8R7PHT4');
        // Track initial page view
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <Fragment>
            <DefaultSeo
                title="Youtube Thumbnail Downloader"
                description="Download high-quality thumbnails from YouTube videos."
                canonical="https://your-website-url.com"
                openGraph={{
                    url: "https://your-website-url.com",
                    title: "Youtube Thumbnail Downloader",
                    description: "Download high-quality thumbnails from YouTube videos.",
                    site_name: "Youtube Thumbnail Downloader",
                }}
            />
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
