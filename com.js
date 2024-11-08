document.addEventListener('DOMContentLoaded', function () {
  
    const threads = document.querySelectorAll('.category-card a');
    threads.forEach(thread => {
        thread.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Navigating to the forum category...');
      
        });
    });
});
