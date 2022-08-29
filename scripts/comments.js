const commentHandler = (post, id, comments) => {
    const commentContainer = document.createElement('div');
    const showCommentsBtn = document.createElement('button');
    const allComments = document.createElement('div');

    const renderShowButton = () => {
        showCommentsBtn.innerHTML = 'show comments';
        showCommentsBtn.classList.add('showComments');
        post.appendChild(showCommentsBtn);

        showCommentsBtn.addEventListener('click', () => {
            commentContainer.style.display = 'block';
            showCommentsBtn.style.display = 'none';
        })
    }

    const renderCloseButton = () => {
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'close';
        closeBtn.classList.add('closeBtn');
        commentContainer.appendChild(closeBtn);

        closeBtn.addEventListener('click', () => {
            commentContainer.style.display = 'none';
            showCommentsBtn.style.display = 'block'
        })
    }

    const renderFormInput = () => {
        const commentInput = document.createElement('input');
        commentInput.classList.add('commentInput');
        commentContainer.appendChild(commentInput);

        allComments.classList.add('comments');
        commentContainer.appendChild(allComments);

        const checkIsEmpty = () => {
            const isDisabled = !(commentInput.value?.length);
            addComment.disabled = isDisabled;
        }

        const clearForm = () => {
            commentInput.value = '';
            addComment.setAttribute("disabled", false);
        }

        commentInput.addEventListener('keyup', checkIsEmpty);

        const addComment = document.createElement('button');
        addComment.innerHTML = 'add comment';
        addComment.classList.add('addComment');
        addComment.setAttribute("disabled", false);
        commentContainer.appendChild(addComment);

        addComment.addEventListener('click', () => {
            renderComment(commentInput.value)
            clearForm()
        })
    }

    const renderCommentForm = () => {
        renderShowButton();
        commentContainer.classList.add('commentContainer');
        post.appendChild(commentContainer);
        renderFormInput();
        renderCloseButton();
    }

    const render = (value) => {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = value;
        allComments.appendChild(comment);
    }

    const renderComment = (value) => {
        render(value);
        DB.createComment(id, value);
    }

    const renderExistComments = () => {
        comments.forEach(value => {
            render(value);
        });
    }

    renderCommentForm();
    renderExistComments();
}
