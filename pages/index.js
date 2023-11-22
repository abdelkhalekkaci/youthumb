import { useState } from 'react';

const Index = () => {
    const [videoURL, setVideoURL] = useState('');
    const [thumbnailOptions, setThumbnailOptions] = useState([]);

    const getYouTubeThumbnail = (url) => {
        // Logic to fetch YouTube thumbnails
    };

    const downloadThumbnail = (url) => {
        // Logic to download thumbnails
    };

    const handleThumbnailClick = (url) => {
        // Logic to handle thumbnail click
    };

    const handleDownloadClick = () => {
        if (thumbnailOptions.length === 0) {
            getYouTubeThumbnail(videoURL);
        } else {
            // Logic when thumbnails are available
            // downloadThumbnail(thumbnailOptions[0].url);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Youtube Thumbnail Downloader</h1>
                <p className="text-gray-600 intro-text">Download high-quality thumbnails from YouTube videos.</p>
            </header>

            <div className="flex flex-col items-center mb-8">
                <input
                    type="text"
                    className="w-full md:w-1/2 px-4 py-2 border rounded"
                    placeholder="Enter YouTube URL"
                    value={videoURL}
                    onChange={(e) => setVideoURL(e.target.value)}
                />
                <br />
                <button
                    className="btn-blue mt-2"
                    onClick={handleDownloadClick}
                >
                    {thumbnailOptions.length === 0 ? 'Download Thumbnails' : 'Processing...'}
                </button>
            </div>

            {thumbnailOptions.length > 0 && (
                <div className="mt-8">
                    {/* Render thumbnail options */}
                </div>
            )}

            <div className="flex-grow" />

            <section className="mt-8 flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-4 text-center">How to Use Our Website</h2>
                <p className="text-gray-700 text-center">
                    To download a thumbnail,<br />
                    First, enter a valid YouTube video URL in the input field above and click the "Download Thumbnails" button.<br />
                    Once the thumbnail options appear below, click the "Download Image" button below the desired thumbnail to start the download.<br />
                    To download the displayed thumbnail, right-click the image and select "Save image as..." from the context menu to save it to your device.
                </p>
            </section>
        </div>
    );
};

export default Index;
