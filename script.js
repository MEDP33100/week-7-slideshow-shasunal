window.onload = function(){
    let slideIndex = 1;

    window.plusSlides = function(n){
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n){
        showSlides(slideIndex = n);
    }

    function showSlides(n){
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length){ slideIndex = 1}
        if (n < 1){ slideIndex = slides.length}
        for (i = 0; i < slides.length; i++){
            slides[i].style.display ="none";
        }
        for (i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Fetch API images into existing img elements
    async function fetchImages(){
        const imgIds = ['img1','img2','img3'];
        for (let id of imgIds){
            const imgEl = document.getElementById(id);
            if (imgEl){
                const response = await fetch('https://foodish-api.com/api/');
                const data = await response.json();
                imgEl.src = data.image;
            }
        }

        // Once images are ready, show first slide
        showSlides(slideIndex);
    }

    fetchImages();
}
