import React from 'react';
function PlaylistEmbed() {
    return(
        <div>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?si=uGAgxjirRokyes55&amp;list=PLVmz_eX_WFJbvIbnukyna0-0T-lDIEu8B" title="YouTube playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
            ></iframe>
        </div>
    )
}

export default PlaylistEmbed;
