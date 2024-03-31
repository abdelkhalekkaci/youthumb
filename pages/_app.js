import "../styles/Home.module.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Header from './Header';

function MyApp({ Component, pageProps }) {
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
            <Header /> {/* Include the Header component */}
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
