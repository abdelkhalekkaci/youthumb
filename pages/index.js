import { useState } from 'react';
import copy from 'copy-to-clipboard';

const Index = () => {
    const [videoURL, setVideoURL] = useState('');
    const [thumbnailOptions, setThumbnailOptions] = useState([]);
    const [selectedThumbnail, setSelectedThumbnail] = useState(null);

    const getYouTubeThumbnail = (url) => {
        // ... (existing logic remains unchanged)
    };

    const downloadThumbnail = (url) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'thumbnail.jpg';
        anchor.click();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Youtube Thumbnail Downloader</h1>
                <p className="text-gray-600">Download high-quality thumbnails from YouTube videos.</p>
            </header>
            <div className="text-center">
                {/* Input field and "Download Thumbnails" button */}
            </div>
            {/* Thumbnail options section */}
            {thumbnailOptions.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {thumbnailOptions.map((option, index) => (
                            <div key={index} className="thumbnail-option">
                                <img
                                    src={option.url}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setSelectedThumbnail(option.url)}
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

            {/* How to use our website section */}
            {selectedThumbnail && (
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">How to Use Our Website</h2>
                    <p className="text-gray-700">
                        To download a thumbnail,
                        first, enter a valid YouTube video URL in the input field above and click the "Download Thumbnails" button.
                        Once the thumbnail options appear below, click the "Download Image" button below the desired thumbnail to start the download.
                        To download the displayed thumbnail, right-click the image and select "Save image as..." from the context menu to save it to your device.
                    </p>
                </section>
            )}
        </div>
    );
};

export default Index;
