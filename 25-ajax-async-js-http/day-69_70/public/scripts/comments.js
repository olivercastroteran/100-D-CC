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

  try {
    if (!res.ok) {
      alert('Fetching comments failed!');
      return;
    }

    const data = await res.json();

    if (data && data.length > 0) {
      const commentsListEl = createCommentsList(data);
      commentsSection.innerHTML = '';
      commentsSection.appendChild(commentsListEl);
    } else {
      commentsSection.firstElementChild.textContent =
        'We could not find any comments. Maybe add one...';
    }
  } catch (error) {
    alert('Getting comments failed!');
  }
};

const saveComment = async (e) => {
  e.preventDefault();
  const postId = commentsFormEl.dataset.postid;

  const enteredTitle = commentTitle.value;
  const enteredText = commentText.value;

  const comment = { title: enteredTitle, text: enteredText };

  try {
    const response = await fetch(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      fetchComments();
    } else {
      alert('Could not send comment!');
    }
  } catch (error) {
    alert('Could not send request, try later');
  }
};

getCommentsBtnEl.addEventListener('click', fetchComments);
commentsFormEl.addEventListener('submit', saveComment);
