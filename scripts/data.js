const dataHandler = () => {
    let LS = null;

    if (localStorage.getItem('DB')) {
        LS = JSON.parse(localStorage.getItem('DB'));
    } else {
        LS = {posts: []};
    }

    const createPost = (title, content) => {
        LS.posts.push({title, content});
        localStorage.setItem('DB', JSON.stringify(LS));

        renderP.renderPost(title, content);
    }

    const getExistsPosts = () => {
        return LS.posts;
    }

    return { createPost, getExistsPosts }
}

const commentsDB = () => {
    let LS = null;

    if (localStorage.getItem('comDB')) {
        LS = JSON.parse(localStorage.getItem('comDB'));
    } else {
        LS = {comments: []};
    }

    const createComment = (commentInput) => {
        LS.comments.push({commentInput});
        localStorage.setItem('comDB', JSON.stringify(LS));

        renderP.renderComments(commentInput.value);
    }

    const getExistsComments = () => {
        return LS.comments;
    }

    return { createComment, getExistsComments }
}

const DB = dataHandler();
const comDB = commentsDB();