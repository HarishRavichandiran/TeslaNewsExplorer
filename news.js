// Fetch Tesla News Articles from the API
function fetchTeslaNews() {
    const apiKey = '3cc37180c0424d9a855eac2440ae3d33';
    const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-11-22&sortBy=publishedAt&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display News Articles
            const newsArticlesContainer = document.getElementById('newsArticlesContainer');
            newsArticlesContainer.innerHTML = '<h2>Tesla News Articles</h2>';

            data.articles.forEach(article => {
                const articleItem = document.createElement('div');
                articleItem.innerHTML = `
                    <div class="card mb-4">
                        <img src="${article.urlToImage}" class="card-img-top" alt="News Image">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                `;
                newsArticlesContainer.appendChild(articleItem);
            });
        })
        .catch(error => console.error('Error fetching Tesla News:', error));
}

// Fetch and display Tesla News Articles
fetchTeslaNews();
