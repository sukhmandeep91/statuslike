// Sample status data (would normally come from a database)
const statusData = [
    {
        text: "Choose people who choose you.",
        likes: "12K"
    },
    {
        text: "Manrattan.",
        likes: "12K"
    },
    {
        text: "It's about who stays, not who promised.",
        likes: "1K"
    },
    {
        text: "I might be okay but I'm not fine at all.",
        likes: "1K"
    },
    {
        text: "People come into our lives and you never know for how long.",
        likes: "1K"
    },
    {
        text: "I work with an Adat will profit or Akele up without the opportunity.",
        likes: "97"
    },
    {
        text: "You've worn gravel & dead car, spares & nets we find & infancy for such cars.",
        likes: "833"
    },
    {
        text: "Just a year ago, things were so different.",
        likes: "2K"
    },
    {
        text: "Don't waste your words on people who deserve your silence.",
        likes: "5K"
    },
    {
        text: "Alone doesn't mean lonely.",
        likes: "1K"
    },
    {
        text: "Tell me how it feels to be loved back.",
        likes: "1K"
    }
];

// DOM Elements
const statusGrid = document.querySelector('.status-grid');
const loadMoreBtn = document.getElementById('loadMore');

// Display statuses
function displayStatuses(statuses) {
    statuses.forEach(status => {
        const statusCard = document.createElement('div');
        statusCard.className = 'status-card';
        statusCard.innerHTML = `
            <div class="status-text">${status.text}</div>
            <div class="status-meta">
                <span>${status.likes} <i class="fas fa-heart"></i></span>
                <button class="copy-btn">COPY</button>
            </div>
        `;
        statusGrid.appendChild(statusCard);
        
        // Add copy functionality
        const copyBtn = statusCard.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(status.text)
                .then(() => {
                    copyBtn.textContent = 'COPIED!';
                    setTimeout(() => {
                        copyBtn.textContent = 'COPY';
                    }, 2000);
                });
        });
    });
}

// Initial load
displayStatuses(statusData);

// Load more functionality
let currentPage = 1;
const statusPerPage = 10;

loadMoreBtn.addEventListener('click', () => {
    // In a real app, this would fetch more data from a server
    currentPage++;
    displayStatuses(statusData); // For demo, just show same data again
});

// Search functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredStatuses = statusData.filter(status => 
        status.text.toLowerCase().includes(searchTerm)
    );
    
    statusGrid.innerHTML = '';
    displayStatuses(filteredStatuses);
});
