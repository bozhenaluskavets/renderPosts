const postsHandler = () => {
    const posts = document.getElementById('posts');

    const renderPost = (title, content) => {

        const post = document.createElement('div');
        post.classList.add('post');
        
        const postTitle = document.createElement('div');
        postTitle.innerHTML = title;
        postTitle.classList.add('postTitle');
        post.appendChild(postTitle);

        const postContent = document.createElement('div');
        postContent.innerHTML = content;
        postContent.classList.add('postContent');
        post.appendChild(postContent);

        const showCommentsBtn = document.createElement('button');
        showCommentsBtn.innerHTML = 'show comments';
        showCommentsBtn.classList.add('showComments');
        post.appendChild(showCommentsBtn);
        posts.appendChild(post);

        // comments
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('commentContainer');
        post.appendChild(commentContainer);

        const commentInput = document.createElement('input');
        commentInput.classList.add('commentInput');
        commentContainer.appendChild(commentInput);

        const addComment = document.createElement('button');
        addComment.innerHTML = 'add comment';
        addComment.classList.add('addComment');
        addComment.setAttribute("disabled", false);
        commentContainer.appendChild(addComment);

        const comments = document.createElement('div');
        comments.classList.add('comments');
        commentContainer.appendChild(comments);

        

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'close';
        closeBtn.classList.add('closeBtn');
        commentContainer.appendChild(closeBtn);

        post.appendChild(commentContainer);

        const checkIsEmpty = () => {
            const isDisabled = !(commentInput.value?.length);
            addComment.disabled = isDisabled;
        }

        const clearForm = () => {
            commentInput.value = '';
            addComment.setAttribute("disabled", false);
        }
    
        commentInput.addEventListener('keyup', checkIsEmpty);

        showCommentsBtn.addEventListener('click', () => {
            commentContainer.style.display = 'block';
            showCommentsBtn.style.display = 'none'
        })

        addComment.addEventListener('click', () => {
            checkIsEmpty();

            const comment = document.createElement('div');
            comment.classList.add('comment');
            comments.appendChild(comment);
            comment.innerHTML += commentInput.value;
            clearForm()
        })

        closeBtn.addEventListener('click', () => {
            commentContainer.style.display = 'none';
            showCommentsBtn.style.display = 'block'
        })

    }

    const renderExistsPosts = () => {
        const oldPosts = DB.getExistsPosts();
        oldPosts.map(post => {
            renderPost(post.title, post.content);
        });
    }

    const renderExistsComments = () => {
        const oldComments = comDB.getExistsComments();
        oldComments.map(comment => {
            renderPost(comment.commentInput);
        });
    }

    return { renderPost, renderExistsPosts, renderExistsComments }
}

const renderP = postsHandler();
renderP.renderExistsPosts();
renderP.renderExistsComments();