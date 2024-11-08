
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = event.target.href; 
    });
});
