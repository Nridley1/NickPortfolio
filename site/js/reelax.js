const lightbox = document.createElement('div', 'video', '.popup-vid');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image =>{
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img);
    })
})
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
})


document.querySelectorAll('.container video').forEach(video => {
    video.onclick = () => {
        document.querySelector('.popup-vid').style.display = 'block';
        document.querySelector('.popup-vid video').src = video.getAttribute('src');
    }
});
document.querySelector('.popup-vid span').onclick = () => {
    document.querySelector('.popup-vid').style.display = 'none';
    document.querySelector('.popup-vid video').pause();
    document.querySelector('.popup-vid').currentTime = 0;

}


