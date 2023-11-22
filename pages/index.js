import { useState } from 'react';

const Index = () => {
    const [videoURL, setVideoURL] = useState('');
    const [thumbnailOptions, setThumbnailOptions] = useState([]);
    const [error, setError] = useState(null);

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
            setError(null); // Clear previous errors if any
        } else {
            setThumbnailOptions([]);
            setError('Invalid YouTube URL. Please enter a valid URL.');
        }
    };

    const downloadThumbnail = async (url) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to download thumbnail (${response.status} ${response.statusText})`);
            }

            const blob = await response.blob();
            const blobURL = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = blobURL;
            link.download = 'thumbnail.jpg';
            link.click();

            URL.revokeObjectURL(blobURL);
            setError(null); // Clear any previous errors
        } catch (error) {
            setError('Error downloading thumbnail. Please try again.'); // Set error state
            console.error('Error downloading thumbnail:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 text-center">
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
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {thumbnailOptions.map((option, index) => (
                            <div key={index} className="thumbnail-option">
                                <a href={option.url} download={`thumbnail_${index + 1}.jpg`}>
                                    <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                                </a>
                                <button className="btn-blue mt-2" onClick={() => downloadThumbnail(option.url)}>
                                    Download Image
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {error && <p className="text-red-500">{error}</p>} {/* Display error message if there's an error */}
        </div>
    );
};

export default Index;
