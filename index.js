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
    ifsearchTerm === ''){
        // Show message
        showMessage('Please add a search term', 'alert-danger');
    }

    e.preventDefault();
});