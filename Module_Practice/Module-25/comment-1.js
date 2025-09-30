document
  .getElementById('btn-comment-post')
  .addEventListener('click', function () {
    const commentText = document.getElementById('Comment-text');
    const comment = commentText.value;
    const commentContainer = document.getElementById('comment-container');
    const commentElement = document.createElement('p');
    commentElement.innerText = comment;
    commentContainer.appendChild(commentElement);
    commentElement.classList.add('comment');
    commentText.value = '';
  });
