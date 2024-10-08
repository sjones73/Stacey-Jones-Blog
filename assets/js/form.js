
// function onSubmit() {
//     localStorage.setItem("username", document.getElementById("username").value);
//     localStorage.setItem("title", document.getElementById("title").value);
//     localStorage.setItem("Content", document.getElementById("content").value);
// }

// Select the form element
const form = document.querySelector('form');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form input values
    const username = document.querySelector("#username").value;
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;

    // Save the form data to local storage
    const blogData = {
        username: username,
        title: title,
        content: content
    };

    ///////////////////////////////////////
//    const saveToLocalStorage = function(data) {
//     const savesBlogs = readFromLocalStorage();
//     savesBlogs.push(data);
//     const stringData = JSON.stringify(savesBlogs);
//     localStorage.setItem('blogData', stringData);
//    }
   /////////////////////////////////

    const savesBlogs = readFromLocalStorage();
    savesBlogs.push(blogData);
    const stringData = JSON.stringify(savesBlogs);
    localStorage.setItem('blogData', stringData);

    // Redirect to blog.html after saving data
    window.location.href = 'blog.html';
});