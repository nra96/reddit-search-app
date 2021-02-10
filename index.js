import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

//FORM EVENT LISTENER
searchForm.addEventListener('submit', e => {
    //Get search term 
    const searchTerm = searchInput.value;
    // Get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // Get limit
    const searchLimit = document.getElementById('limit').value;

    // Check input
    if (searchTerm === '') {
        // Show message
        showMessage('Please add a search term', 'alert-danger');
    }

    // Clear input
    searchInput.value = '';

    // Search Reddit 
    reddit.search(searchTerm, searchLimit, sortBy)
        .then(results => {
            let output = '<div class="card-columns>';
            //Loop through posts
            results.forEach(post => {
                output += `<div class="card">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.selfText}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            `;
            });

            output += '</div>';
            document.getElementById('results').innerHTML = output;
        });

    e.preventDefault();
});

//Show message
function showMessage(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add Text 
    div.appendChild(document.createTextNode(message));
    // Get parent
    const searchContainer = document.getElementById('search-container');
    // Get search
    const search = document.getElementById('search');

    //insert message 
    searchContainer.insertBefore(div, search);

    // Timeout alert
    setTimeout(() => document.querySelector('alert').remove(), 3000);
}