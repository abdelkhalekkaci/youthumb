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

            // Create an anchor element and trigger the download
            const anchor = document.createElement('a');
            anchor.href = blobURL;
            anchor.download = 'thumbnail.jpg';
            anchor.click();

            // Revoke the Object URL to prevent memory leaks
            URL.revokeObjectURL(blobURL);

            setError(null); // Clear any previous errors
        } catch (error) {
            setError('Error downloading thumbnail. Please try again.'); // Set error state
            console.error('Error downloading thumbnail:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            {/* Existing code for header, input field, and thumbnailOptions */}
            {/* ... */}

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
