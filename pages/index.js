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
            {thumbnailOptions.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
                    {selectedThumbnail !== null ? (
                        <div className="fullscreen-thumbnail">
                            <button className="btn-blue mb-4" onClick={handleBackToThumbnails}>
                                Back
                            </button>
                            <img src={thumbnailOptions[selectedThumbnail].url} alt={`Thumbnail ${selectedThumbnail + 1}`} />
                            <button
                                className="btn-blue mt-2"
                                onClick={() => openThumbnailInNewTab(thumbnailOptions[selectedThumbnail].url)}
                                type="button"
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
                style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginTop: '20px', textAlign: 'center' }}
            >
                
                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    To acquire a thumbnail, follow these steps:
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    Enter a valid YouTub video URL into the provided input field.<br />
                    Click the "Download Thumbnails" button to generate thumbnail options.<br />
                    Once the thumbnail choices appear below, select your desired thumbnail by clicking the "View Fullscreen" button.<br />
                    Save the displayed image by using the "Save Image As..." option.<br />
                </p>
            </section>

        </div>
    );
};

export default Index;
