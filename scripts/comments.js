// const commentsHandler = () => {

//     const renderComments = () => {

//         const commentContainer = document.createElement('div');
//         commentContainer.classList.add('commentContainer');
//         post.appendChild(commentContainer);

//         const commentInput = document.createElement('input');
//         commentInput.classList.add('commentInput');
//         commentContainer.appendChild(commentInput);

//         const addComment = document.createElement('button');
//         addComment.innerHTML = 'add comment';
//         addComment.classList.add('addComment');
//         addComment.setAttribute("disabled", false);
//         commentContainer.appendChild(addComment);

//         const comment = document.createElement('div');
//         comment.classList.add('comment');
//         commentContainer.appendChild(comment);

//         post.appendChild(commentContainer);

//         const checkIsEmpty = () => {
//             const isDisabled = !(commentInput.value?.length);
//             addComment.disabled = isDisabled;
//         }
    
//         commentInput.addEventListener('keyup', checkIsEmpty);
//         addComment.addEventListener('click', () => {
//             comDB.createComment(commentInput.value);
//             checkIsEmpty();
//             comment.innerHTML = commentInput.value;
    
//         })
    
//         showCommentsBtn.addEventListener('click', () => {
//             commentContainer.style.display = 'block';
//         })
//     }

//     // const renderExistsComments = () => {
//     //     const oldComments = comDB.getExistsComments();
//     //     oldComments.map(comment => {
//     //         renderComments(comment.commentInput);
//     //     });
//     // }

//     return { renderComments }
// }

// const renderC = commentsHandler();
// renderC.renderExistsComments();