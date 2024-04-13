// Selecting elements
const postForm = document.getElementById('new-post-form');
const postList = document.getElementById('post-list');

// Function to handle form submission
function submitPost(event) {
  event.preventDefault(); // Prevent default form submission
  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;

  // Create new post element
  const post = document.createElement('div');
  post.classList.add('post');
  post.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
  `;

  // Add post to post list
  postList.appendChild(post);

  // Clear form fields
  postForm.reset();
}

// Event listener for form submission
postForm.addEventListener('submit', submitPost);
