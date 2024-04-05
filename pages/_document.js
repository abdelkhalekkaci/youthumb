import Document, { Html, Head, Main, NextScript } from "next/document";
import ReactGA from 'react-ga'; // Import react-ga

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    componentDidMount() {
        // Initialize Google Analytics
        ReactGA.initialize('G-YPC8R7PHT4');
        // Track initial page view
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
