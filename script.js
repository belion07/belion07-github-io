let isMusicPlaying = false;

// Crear efectos de brillos
function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparklesContainer.appendChild(sparkle);
    }
}

// Crear lluvia de corazones
function createHeartRain() {
    const heartRainContainer = document.getElementById('heartRain');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        heartRainContainer.appendChild(heart);
        
        // Remover el corazón después de la animación
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 5000);
    }
    
    // Crear corazones cada 300ms
    setInterval(createHeart, 300);
}

// Función para mostrar el collage directamente
function showPhotoGallery() {
    const photoGallery = document.getElementById('photoGallery');
    photoGallery.style.display = 'grid';
}

// Función para mostrar imagen completa
function showFullImage(imageSrc, title) {
    const modal = document.getElementById('fullImageModal');
    const fullImage = document.getElementById('fullImage');
    const imageTitle = document.getElementById('imageTitle');
    const imageMessage = document.getElementById('imageMessage');

    fullImage.src = imageSrc;
    imageTitle.textContent = title;
    
    // Indirectas románticas suaves para alguien del 2007
    const romanticMessages = [
        "¿Sabías que cuando sonríes, todo se vuelve más bonito? Eres mi luz favorita.",
        "Cada vez que te veo, me siento más feliz. Eres mi alegría diaria.",
        "Si el amor fuera un color, sería el de tus ojos. Me encanta mirarte.",
        "Eres como el sol de la mañana: me despiertas y me llenas de energía.",
        "Contigo, cada día es especial. Nunca me aburro de estar contigo.",
        "Eres mi pensamiento favorito, mi sonrisa más sincera, mi razón para ser feliz.",
        "Si pudiera elegir un superpoder, sería el de hacerte sonreír todos los días.",
        "Eres como una canción que me gusta mucho. La más bonita que he escuchado.",
        "Cada momento contigo es como una aventura nueva. Me encanta descubrirte.",
        "Eres mi persona favorita, mi compañía más dulce, mi amiga más especial.",
        "Si el amor tuviera sabor, sería como tu sonrisa: dulce y perfecta.",
        "Eres mi inspiración diaria, mi motivación constante, mi felicidad completa."
    ];
    
    const randomMessage = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    imageMessage.textContent = randomMessage;
    
    modal.style.display = 'flex';
}

// Función para cerrar imagen completa
function closeFullImage() {
    const modal = document.getElementById('fullImageModal');
    modal.style.display = 'none';
}



// Función para controlar música
function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicBtn = document.getElementById('musicBtn');

    if (isMusicPlaying) {
        audio.pause();
        musicBtn.textContent = '🔇 Música';
        isMusicPlaying = false;
    } else {
        audio.play();
        musicBtn.textContent = '🔊 Música';
        isMusicPlaying = true;
    }
}

// Inicializar efectos
createSparkles();
createHeartRain();

// Mostrar collage y reproducir música automáticamente
window.addEventListener('load', function() {
    showPhotoGallery();
    if (!isMusicPlaying) {
        toggleMusic();
    }
}); 