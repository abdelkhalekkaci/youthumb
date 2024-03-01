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
 
                    Enter a valid YouTube video URL into the provided input field.<br />
                    Click the "Download Thumbnails" button to generate thumbnail options.<br />
                    Once the thumbnail choices appear below, select your desired thumbnail by clicking the "View Fullscreen" button.<br />
                    Save the displayed image by using the "Save Image As..." option.<br />
                </p>
            </section>

            <section
                className="how-to-section"
                style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginTop: '20px', textAlign: 'center' }}
            >
                
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    YouTube Thumbnail Downloader is a powerful online tool that changes how people view and use YouTube thumbnails.<br>
                    By giving people an initial look at what the video is about, thumbnails are very important for getting people to watch it.<br/>
                    This tool lets users take these thumbnails to use for themselves, which gives content creators, marketers, and fans a lot of options.<br/>
                </p>

                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    What YouTube Thumbnail Quality You Will Get?
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    Download free, high-quality thumbnails of any YouTube video in Full HD (1080p), HD (720p), standard definition (SD), and smaller sizes. <br/>
                    It works with the following formats: HD, HQ, 1080p, and 4K videos on YouTube.<br />
                    <br /><br />

                    The quality of the saved thumbnails is something that users often think about a lot. <br />
                    YouTube Thumbnail Downloader makes sure that users can access high-resolution <br />pictures that keep the clarity and visual appeal that are important for getting people's attention.  <br />
                    The tool extracts thumbnails in different sizes, so it used for a range of tasks. <br />
                </p>

                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    What is the Use of This YouTube Thumbnail Grabber Website?
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    The primary purpose of YouTube Thumbnail Downloader is to provide users with a convenient way to obtain YouTube video thumbnails.  <br/>
                    Content creators can benefit from this tool by using the downloaded thumbnails for promotional materials,<br /> video previews, or even incorporating them into their own content.<br />
                    Marketers can leverage it for creating eye-catching advertisements, and enthusiasts can use it for personal collections or creative projects.<br />
                </p>

                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    How to Use This YouTube Thumbnail Downloader Website?
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    Using YouTube Thumbnail Downloader is a simple and straightforward process. Users only need to follow a few steps:  <br/><br/>
                    <b>a. Copy Video URL:</b> Copy the URL of the YouTube video for which you want to download the thumbnail.<br />
                    <b>b. Paste URL:</b> Paste the copied URL into the designated field on the YouTube Thumbnail Downloader website.<br />
                    <b>c. Generate Thumbnail:</b> Click on the "Generate" or "Download" button to initiate the process.<br />
                    <b>d. Download Thumbnail:</b> Once the tool has extracted the thumbnail, users can click on the download link to save it to their device.<br />
                </p>
                  
                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    How to Download YouTube Thumbnail in a Few Seconds?
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    The efficiency of YouTube Thumbnail Downloader is highlighted by its ability to provide users with the desired thumbnails in just a few seconds. <br/>
                    The streamlined process ensures that users can quickly access and download the thumbnails they need, saving time and enhancing their workflow.<br />
                </p>

                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    Is It Legal to Download YouTube Thumbnails?
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    Downloading YouTube thumbnails for personal use or creative projects is generally considered legal. <br/>
                    However, it's crucial to respect copyright and intellectual property rights. Users should refrain from using <br />downloaded thumbnails for any unlawful or unethical purposes, such as misrepresentation or unauthorized commercial use.<br />
                </p>

                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    Is The YouTube Thumbnail Downloader Free or Paid?
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    YouTube Thumbnail Downloader is designed to be user-friendly and accessible to everyone.<br/>
                    The majority of these tools are available for free, allowing users to enjoy the benefits without any financial commitment.<br />
                    However, some platforms may offer additional features or advanced options through premium versions, which might come with a cost.<br />
                </p>

                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    Is There Any Copyright Risk on YouTube Thumbnails?
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    While downloading YouTube thumbnails for personal use is generally considered legal,<br /> users should be cautious about potential copyright risks. <br/>
                    If the thumbnail includes copyrighted material or trademarks belonging to others, it's essential to seek<br/> permission or ensure that the usage falls within the boundaries of fair use.<br />
                    Using thumbnails for commercial purposes without proper authorization can lead to copyright infringement issues.<br />
                </p>

                <h3 className="text-gray-700" style={{ fontSize: '1rem', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
                    Conclusion
                </h3>
                <p className="text-gray-700" style={{ lineHeight: '1.6', marginBottom: '10px', width: 'fit-content', margin: '0 auto' }}>
 
                    In conclusion, Thumbnail Taker is a valuable tool for content creators, marketers, and enthusiasts alike.<br/>
                    By offering a quick and efficient way to download high-quality thumbnails, it enhances the visual appeal<br/> of content and provides endless possibilities for creativity.<br />
                    Users should, however, be mindful of legal considerations and ensure that their use of <br/>downloaded thumbnails aligns with ethical and legal standards.<br />
                    With the right approach, YouTube Thumbnail Downloader becomes a versatile asset in the digital<br/> landscape, unlocking the potential for captivating and engaging content.<br />
                </p>
            </section>

        </div>
    );
};

export default Index;
