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