import { useState } from 'react';

const Index = () => {
    const [videoURL, setVideoURL] = useState('');
    const [thumbnailOptions, setThumbnailOptions] = useState([]);

    const getYouTubeThumbnail = (url) => {
        // ... (existing logic remains unchanged)
    };

    const downloadThumbnail = (url) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'thumbnail.jpg';
        anchor.click();
    };

    const handleThumbnailClick = (url) => {
        // ... (existing logic remains unchanged)
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Youtube Thumbnail Downloader</h1>
                <p className="text-gray-600 intro-text">Download high-quality thumbnails from YouTube videos.</p>
            </header>
            <section className="mt-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">How to Use Our Website</h2>
                <p className="text-gray-700">
                    To download a thumbnail,<br />
                    First, enter a valid YouTube video URL in the input field above and click the "Download Thumbnails" button.<br />
                    Once the thumbnail options appear below, click the "Download Image" button below the desired thumbnail to start the download.<br />
                    To download the displayed thumbnail, right-click the image and select "Save image as..." from the context menu to save it to your device.
                </p>
            </section>
            <div className="text-center">
                <input
                    type="text"
                    className="w-full md:w-1/2 px-4 py-2 border rounded"
                    placeholder="Enter YouTube URL"
                    value={videoURL}
                    onChange={(e) => setVideoURL(e.target.value)}
                />
                <button className="btn-blue mt-2" onClick={() => getYouTubeThumbnail(videoURL)}>
                    Download Thumbnails
                </button>
            </div>
            {thumbnailOptions.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {thumbnailOptions.map((option, index) => (
                            <div key={index} className="thumbnail-option">
                                <img
                                    src={option.url}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => handleThumbnailClick(option.url)}
                                />
                                <button
                                    className="btn-blue mt-2"
                                    onClick={() => downloadThumbnail(option.url)}
                                >
                                    Download Image
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;
