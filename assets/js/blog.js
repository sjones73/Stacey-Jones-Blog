const mainElement = document.querySelector('main');
function readFromLocalStorage() {
    const blog = JSON.parse(localStorage.getItem('blogData'));
    return blog || []
}
function renderBlogs() {
   const blogData = readFromLocalStorage()
   
  
    // Check if blogData exists and it's not empty
    if (blogData && blogData.length > 0) {
      blogData.forEach(blogEntry => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = blogEntry.title;
  
        const contentElement = document.createElement('p');
        contentElement.textContent = blogEntry.content;
  
        const usernameElement = document.createElement('p');
        usernameElement.textContent = `Author: ${blogEntry.username}`;
  
        blogCard.appendChild(titleElement);
        blogCard.appendChild(contentElement);
        blogCard.appendChild(usernameElement);
  
        mainElement.appendChild(blogCard);
      });
    } else {
      const noPostsMessage = document.createElement('h2');
      noPostsMessage.textContent = 'No blog posts yet.';
  
      const returnLink = document.createElement('a');
      returnLink.textContent = 'Return to Home';
      returnLink.href = 'index.html';
  
      mainElement.appendChild(noPostsMessage);
      mainElement.appendChild(returnLink);
    }
  }
  
  // Call the renderBlogs function when the page loads
  window.onload = renderBlogs;