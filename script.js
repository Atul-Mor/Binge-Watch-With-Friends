// Sample restaurant data

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display movies in content rows
    displayMovies();

    // Add event listeners to mood cards
    const moodCards = document.querySelectorAll('.mood-card');
    moodCards.forEach(card => {
        card.addEventListener('click', () => {
            // Add visual feedback
            moodCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            const mood = card.dataset.mood;
            const playlist = moodPlaylists[mood];
            
            // Generate and display playlist
            const playlistResults = document.getElementById('playlistResults');
            playlistResults.innerHTML = `
                <div class="playlist-header">
                    <h3>${playlist.title}</h3>
                    <p>${playlist.description}</p>
                </div>
                <div class="playlist-movies">
                    ${movies
                        .filter(movie => 
                            playlist.genres.some(genre => movie.genre.includes(genre)) ||
                            playlist.mood.some(m => movie.mood.includes(m))
                        )
                        .map(movie => `
                            <div class="movie-card">
                                <img src="${movie.image}" alt="${movie.title}">
                                <h4>${movie.title}</h4>
                                <p>${movie.type}</p>
                            </div>
                        `).join('')}
                </div>
            `;
        });
    });

    // Text size reduction after 6 seconds
    const heroTitle = document.querySelector('.hero h1');
    const heroDescription = document.querySelector('.hero-description');
    const heroContent = document.querySelector('.hero-content');

    setTimeout(() => {
        heroTitle.classList.add('smaller');
        heroDescription.classList.add('smaller');
        heroContent.style.transform = 'translateX(20px)';
    }, 6000); // 6 seconds
});

// Sample movie data
const movies = [
    {
        id: 1,
        title: "Stranger Things",
        type: "TV Show",
        genre: ["Sci-Fi", "Horror", "Drama"],
        image: "images/stranger.jpg",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        mood: ["mysterious", "dark", "suspenseful"]
    },
    {
        id: 2,
        title: "The Crown",
        type: "TV Show",
        genre: ["Drama", "Historical"],
        image: "images/thecrown.jpg",
        description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
        mood: ["elegant", "dramatic", "historical"]
    },
    {
        id: 3,
        title: "Midnight in Paris",
        type: "Movie",
        genre: ["Romance", "Drama", "French Cinema"],
        image: "images/midnightinparis.jpg",
        description: "A romantic comedy about a family traveling to the French capital for business.",
        mood: ["romantic", "melancholic", "atmospheric"]
    },
    {
        id: 4,
        title: "Amélie",
        type: "Movie",
        genre: ["Romance", "Comedy", "French Cinema"],
        image: "images/amelie.jpg",
        description: "A young woman decides to change the lives of those around her for the better.",
        mood: ["romantic", "whimsical", "atmospheric"]
    },
    {
        id: 5,
        title: "Before Sunset",
        type: "Movie",
        genre: ["Romance", "Drama"],
        image: "images/beforesunset.jpg",
        description: "Nine years after their first meeting, Jesse and Celine reunite in Paris.",
        mood: ["romantic", "melancholic", "atmospheric"]
    },
    {
        id: 6,
        title: "The Notebook",
        type: "Movie",
        genre: ["Romance", "Drama"],
        image: "images/notebook.jpg",
        description: "A poor yet passionate young man falls in love with a rich young woman.",
        mood: ["romantic", "emotional", "dramatic"]
    },
    {
        id: 7,
        title: "La La Land",
        type: "Movie",
        genre: ["Romance", "Musical", "Drama"],
        image: "images/land.jpg",
        description: "A jazz pianist falls for an aspiring actress in Los Angeles.",
        mood: ["romantic", "melancholic", "atmospheric"]
    },
    {
        id: 8,
        title: "The Grand Budapest Hotel",
        type: "Movie",
        genre: ["Comedy", "Drama"],
        image: "images/grandbudapest.jpg",
        description: "The adventures of a legendary concierge at a famous European hotel.",
        mood: ["whimsical", "comedy", "atmospheric"]
    }
];

// Trending and Popular Movies
const trendingMovies = [
    {
        title: "Oppenheimer",
        type: "Movie",
        image: "images/openhimer.jpg"
    },
    {
        title: "Barbie",
        type: "Movie",
        image: "images/barbie.jpg"
    },
    {
        title: "The Last of Us",
        type: "TV Show",
        image: "images/lastofus.jpg"
    },
    {
        title: "Wednesday",
        type: "TV Show",
        image: "images/wednesday.jpg"
    }
];

const popularMovies = [
    {
        title: "Squid Game",
        type: "TV Show",
        image: "images/squidgame.jpg"
    },
    {
        title: "Money Heist",
        type: "TV Show",
        image: "images/moneyheist.jpg"
    },
    {
        title: "The Witcher",
        type: "TV Show",
        image: "images/witcher.jpg"
    },
    {
        title: "Bridgerton",
        type: "TV Show",
        image: "images/bridgerton.jpg"
    }
];

// Function to display movies in content rows
function displayMovies() {
    const trendingContent = document.querySelector('.row:first-child .row-content');
    const popularContent = document.querySelector('.row:last-child .row-content');

    // Display trending movies
    trendingContent.innerHTML = trendingMovies.map(movie => `
        <div class="movie-card">
            <img src="${movie.image}" alt="${movie.title}">
            <h4>${movie.title}</h4>
            <p>${movie.type}</p>
        </div>
    `).join('');

    // Display popular movies
    popularContent.innerHTML = popularMovies.map(movie => `
        <div class="movie-card">
            <img src="${movie.image}" alt="${movie.title}">
            <h4>${movie.title}</h4>
            <p>${movie.type}</p>
        </div>
    `).join('');
}

// Mood-based playlists
const moodPlaylists = {
    "rainy-paris": {
        title: "Rainy Day in Paris",
        description: "Perfect for a cozy day indoors with French cinema and romantic dramas",
        genres: ["Romance", "Drama", "French Cinema"],
        mood: ["romantic", "melancholic", "atmospheric"]
    },
    "cozy-night": {
        title: "Cozy Night In",
        description: "Comfort viewing for a relaxing evening",
        genres: ["Comedy", "Feel-Good", "Romance"],
        mood: ["warm", "comfortable", "light"]
    },
    "summer-vibes": {
        title: "Summer Vibes",
        description: "Upbeat and energetic content for sunny days",
        genres: ["Comedy", "Adventure", "Action"],
        mood: ["energetic", "fun", "upbeat"]
    },
    "action-packed": {
        title: "Action Packed",
        description: "High-octane entertainment for thrill-seekers",
        genres: ["Action", "Thriller", "Adventure"],
        mood: ["intense", "exciting", "dramatic"]
    }
};

// Watch Party functionality
class WatchParty {
    constructor() {
        this.isHost = false;
        this.partyCode = '';
        this.members = [];
        this.reactions = [];
        this.currentTime = 0;
        this.isPlaying = false;
    }

    generatePartyCode() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    startParty() {
        this.isHost = true;
        this.partyCode = this.generatePartyCode();
        this.members = [{
            id: 'host',
            name: 'You (Host)',
            avatar: 'https://occ-0-299-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwO6K4U3Q-1khzXgT3KwowGmMS0Q6t3ET0yJmiXaV8pxT4NA8Hif7I3tDQVbS1dYw2aYqY.png'
        }];
        this.showLobby();
    }

    showLobby() {
        const lobby = document.getElementById('watchPartyLobby');
        const partyCodeInput = document.querySelector('.party-code input');
        partyCodeInput.value = this.partyCode;
        lobby.style.display = 'flex';
    }

    addReaction(reaction) {
        this.reactions.push({
            reaction,
            timestamp: this.currentTime,
            member: 'You'
        });
        this.showReaction(reaction);
    }

    showReaction(reaction) {
        const reactionEl = document.createElement('div');
        reactionEl.className = 'floating-reaction';
        reactionEl.textContent = reaction;
        document.body.appendChild(reactionEl);
        
        setTimeout(() => {
            reactionEl.remove();
        }, 2000);
    }
}

// Initialize features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const watchParty = new WatchParty();

    // Watch Party button handler
    document.getElementById('startWatchParty').addEventListener('click', () => {
        watchParty.startParty();
    });

    // Start Party button in lobby
    document.querySelector('.start-party-btn').addEventListener('click', () => {
        window.location.href = 'watch-party.html';
    });

    // Close lobby button
    document.getElementById('closeLobby').addEventListener('click', () => {
        document.getElementById('watchPartyLobby').style.display = 'none';
    });

    // Copy party code handler
    document.querySelector('.copy-btn').addEventListener('click', () => {
        const codeInput = document.querySelector('.party-code input');
        navigator.clipboard.writeText(codeInput.value);
        const copyBtn = document.querySelector('.copy-btn');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Code';
        }, 2000);
    });

    // Reaction buttons handler
    document.querySelectorAll('.reaction-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const reaction = btn.textContent;
            watchParty.addReaction(reaction);
        });
    });

    // Mood playlist generator
    document.querySelectorAll('.mood-card').forEach(card => {
        card.addEventListener('click', () => {
            const mood = card.dataset.mood;
            const playlist = moodPlaylists[mood];
            
            // Generate and display playlist
            const playlistResults = document.getElementById('playlistResults');
            playlistResults.innerHTML = `
                <div class="playlist-header">
                    <h3>${playlist.title}</h3>
                    <p>${playlist.description}</p>
                </div>
                <div class="playlist-movies">
                    ${movies
                        .filter(movie => 
                            playlist.genres.some(genre => movie.genre.includes(genre)) ||
                            playlist.mood.some(m => movie.mood.includes(m))
                        )
                        .map(movie => `
                            <div class="movie-card">
                                <img src="${movie.image}" alt="${movie.title}">
                                <h4>${movie.title}</h4>
                                <p>${movie.type}</p>
                            </div>
                        `).join('')}
                </div>
            `;
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mute/Unmute functionality
    const video = document.querySelector('.hero-video');
    const muteButton = document.getElementById('muteButton');
    const muteIcon = muteButton.querySelector('i');

    muteButton.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteIcon.classList.remove('fa-volume-mute');
            muteIcon.classList.add('fa-volume-up');
        } else {
            video.muted = true;
            muteIcon.classList.remove('fa-volume-up');
            muteIcon.classList.add('fa-volume-mute');
        }
    });

    const watchPartyLobby = document.getElementById('watchPartyLobby');
    const closeLobbyBtn = document.getElementById('closeLobby');
    const startWatchPartyBtn = document.querySelector('.watch-party-btn');
    const reactionButtons = document.querySelectorAll('.reaction-btn');

    // Open watch party lobby
    startWatchPartyBtn.addEventListener('click', () => {
        watchPartyLobby.style.display = 'flex';
    });

    // Close watch party lobby
    closeLobbyBtn.addEventListener('click', () => {
        watchPartyLobby.style.display = 'none';
    });

    // Copy party code
    const copyBtn = document.querySelector('.copy-btn');
    const partyCodeInput = document.querySelector('.party-code input');
    
    copyBtn.addEventListener('click', () => {
        partyCodeInput.select();
        document.execCommand('copy');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Code';
        }, 2000);
    });

    // Reaction animation
    reactionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const reaction = button.textContent;
            const floatingReaction = document.createElement('div');
            floatingReaction.className = 'floating-reaction';
            floatingReaction.textContent = reaction;
            
            // Position the reaction at the center of the screen
            floatingReaction.style.left = '50%';
            floatingReaction.style.top = '50%';
            floatingReaction.style.transform = 'translate(-50%, -50%)';
            
            document.body.appendChild(floatingReaction);

            // Remove the element after animation completes
            setTimeout(() => {
                floatingReaction.remove();
            }, 2000);
        });
    });
}); 