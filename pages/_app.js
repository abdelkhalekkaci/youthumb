import "../styles/Home.module.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Header from './Header';

function MyApp({ Component, pageProps }) {
HEAD
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

  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Youtube Thumbnails Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
c0bae8814279df52ad1c80f7d3d5764faef3b0b6
}

export default MyApp;
