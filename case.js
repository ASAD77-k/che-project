document.addEventListener('DOMContentLoaded', () => {
    const nextPageButton = document.querySelector('.pagination a:last-child');
    const prevPageButton = document.querySelector('.pagination a:first-child');

   
    nextPageButton.addEventListener('click', (event) => {
        event.preventDefault();
        loadMoreCaseStudies();
    });

    prevPageButton.addEventListener('click', (event) => {
        event.preventDefault();
        loadPreviousCaseStudies();
    });
});

function loadMoreCaseStudies() {
   
    alert('Loading more case studies...');
}

function loadPreviousCaseStudies() {
 
    alert('Loading previous case studies...');
}
