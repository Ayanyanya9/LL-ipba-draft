// Image Zoom on Hover
const imageCards = document.querySelectorAll('.image-card');

imageCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.id = 'scrollToTopBtn';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '30px';
scrollToTopBtn.style.zIndex = '1000';
scrollToTopBtn.style.display = 'none'; // Hidden by default
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.backgroundColor = 'red';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.cursor = 'pointer';

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show the button when scrolling down
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Search Functionality
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    let noResults = true; // Flag for no results

    imageCards.forEach(card => {
        const title = card.querySelector('.image-title').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = ''; // Show the card
            noResults = false; // Found a match
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });

    // Display message if no results found
    const message = document.getElementById('noResultsMessage');
    if (noResults) {
        if (!message) {
            const newMessage = document.createElement('div');
            newMessage.id = 'noResultsMessage';
            newMessage.textContent = 'No images match your search.';
            newMessage.style.color = 'red';
            newMessage.style.fontSize = '1.2em';
            newMessage.style.textAlign = 'center';
            document.querySelector('.image-container').appendChild(newMessage);
        }
    } else if (message) {
        message.remove(); // Remove message if there are results
    }
});
