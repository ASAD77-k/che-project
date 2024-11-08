document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('guide-search');
    const guides = document.querySelectorAll('.guide-card');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        guides.forEach(function (guide) {
            const title = guide.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                guide.style.display = 'block';
            } else {
                guide.style.display = 'none';
            }
        });
    });
});
