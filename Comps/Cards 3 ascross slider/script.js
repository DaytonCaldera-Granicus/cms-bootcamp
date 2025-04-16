document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        gap: 20,
        breakpoints: {
            800: {
                perView: 2
            },
            640:{
                perView: 1
            }
        }
    }).mount()
});
