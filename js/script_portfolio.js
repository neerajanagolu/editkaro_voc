function filterVideos(category) {
    let videos = document.querySelectorAll('.video-item');
    
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => button.classList.remove('active'));

    const activeButton = Array.from(buttons).find(button => button.dataset.category === category);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    videos.forEach(video => {
        if (category === 'all' || video.dataset.category === category) {
            video.style.display = 'block'; 
        } else {
            video.style.display = 'none';
        }
    });
}