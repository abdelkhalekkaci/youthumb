import { useState } from 'react';

const Index = () => {
    const [videoURL, setVideoURL] = useState('');
    const [thumbnailOptions, setThumbnailOptions] = useState([]);
    const [error, setError] = useState(null);

    const getYouTubeThumbnail = (url) => {
        // ... (existing logic remains unchanged)
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
            setError(`Error downloading thumbnail: ${error.message}`);
            console.error('Error downloading thumbnail:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            {/* Header, input field, and other content */}
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
                                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
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
