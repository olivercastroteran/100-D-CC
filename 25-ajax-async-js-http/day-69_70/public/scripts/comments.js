const getCommentsBtnEl = document.getElementById('load-comments-btn');
const commentsSection = document.getElementById('comments');
const commentsFormEl = document.querySelector('#comments-form form');
const commentTitle = document.getElementById('title');
const commentText = document.getElementById('text');

const createCommentsList = (comments) => {
  const commentsListEl = document.createElement('ol');

  for (const comment of comments) {
    const commentEl = document.createElement('li');
    commentEl.innerHTML = `
      <article class="comment-item">
        <h2>${comment.title}</h2>
        <p>${comment.text}</p>
      </article>  
    `;
    commentsListEl.appendChild(commentEl);
  }

  return commentsListEl;
};

const fetchComments = async () => {
  const postId = getCommentsBtnEl.dataset.postid;
  const res = await fetch(`/posts/${postId}/comments`);
  const data = await res.json();

  const commentsListEl = createCommentsList(data);
  commentsSection.innerHTML = '';
  commentsSection.appendChild(commentsListEl);
};

const saveComment = (e) => {
  e.preventDefault();
  const postId = commentsFormEl.dataset.postid;

  const enteredTitle = commentTitle.value;
  const enteredText = commentText.value;

  const comment = { title: enteredTitle, text: enteredText };

  fetch(`/posts/${postId}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

getCommentsBtnEl.addEventListener('click', fetchComments);
commentsFormEl.addEventListener('submit', saveComment);
