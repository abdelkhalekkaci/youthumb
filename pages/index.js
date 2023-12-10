import { useState } from 'react';

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
            setShowThumbnailOptions(true); // Show thumbnail options
        } else {
            setThumbnailOptions([]);
            setShowThumbnailOptions(false); // Hide thumbnail options if URL is invalid
        }
    };

    const downloadThumbnail = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'thumbnail.jpg');
        link.click();
    };

    const handleThumbnailClick = (index) => {
        setSelectedThumbnail(index);
    };

    const handleBackToThumbnails = () => {
        setSelectedThumbnail(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Youtube Thumbnail Downloader</h1>
                <p className="text-gray-600">Download high-quality thumbnails from YouTube videos.</p>
            </header>
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
            {selectedThumbnail !== null && (
                <div className="fullscreen-thumbnail">
                    <button className="btn-blue mb-4" onClick={handleBackToThumbnails}>
                        Back to Thumbnails
                    </button>
                    <img src={thumbnailOptions[selectedThumbnail].url} alt={`Thumbnail ${selectedThumbnail + 1}`} />
                    <button
                        className="btn-blue mt-2"
                        onClick={() => downloadThumbnail(thumbnailOptions[selectedThumbnail].url)}
                        type="button"
                    >
                        Download Image
                    </button>
                </div>
            )}
            {thumbnailOptions.length > 0 && selectedThumbnail === null && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {thumbnailOptions.map((option, index) => (
                            <div key={index} className="thumbnail-option">
                                <img
                                    src={option.url}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                                <button
                                    className="btn-blue mt-2"
                                    onClick={() => downloadThumbnail(option.url)}
                                    type="button"
                                >
                                    Download Image
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Updated section with new styling */}
            <section
                className="how-to-section"
                style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginTop: '20px' }}
            >
                <h2 className="text-2xl font-semibold mb-4" style={{ fontSize: '20px', marginBottom: '15px' }}>
                    How to Use Our Website
                </h2>
                <p className="text-gray-700" style={{ textAlign: 'left', lineHeight: '1.6', marginBottom: '10px' }}>
                    To download a thumbnail,<br />
                    First, enter a valid YouTube video URL in the input field above and click the "Download Thumbnails"
                    button.<br />
                    Once the thumbnail options appear below, click on a thumbnail to view it in full-screen mode. You can
                    then click the "Download Image" button to download it. To return to the thumbnail options, click
                    "Back to Thumbnails".
                </p>
            </section>
        </div>
    );
};

export default Index;
