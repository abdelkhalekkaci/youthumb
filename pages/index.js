import { useState } from 'react';

const Index = () => {
    const [videoURL, setVideoURL] = useState('');
    const [thumbnailOptions, setThumbnailOptions] = useState([]);
    const [showThumbnailOptions, setShowThumbnailOptions] = useState(false);
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

    const handleBack = () => {
        setSelectedThumbnail(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* ... (existing code) */}
            {selectedThumbnail !== null && (
                <div className="fullscreen-thumbnail">
                    <button className="btn-blue mb-4" onClick={handleBack}>
                        Back
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
            {showThumbnailOptions && selectedThumbnail === null && thumbnailOptions.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
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
            {/* ... (rest of your code) */}
        </div>
    );
};

export default Index;
