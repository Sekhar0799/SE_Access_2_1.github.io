document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.image-gallery');
    const images = gallery.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }, 3000);
    
    function updateGallery() {
        const transformValue = -currentIndex * 100 + '%';
        gallery.style.transform = `translateX(${transformValue})`;
    }
});
