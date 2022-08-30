const idGenerator = () => {
    return new Date().getTime().toString();
}

const dataHandler = () => {
    let LS = null;

    if (localStorage.getItem('DB')) {
        LS = JSON.parse(localStorage.getItem('DB'));
    } else {
        LS = {posts: []};
    }

    const createPost = (title, content) => {
        const id = idGenerator();
        LS.posts.push({title, content, id, comments: []});
        localStorage.setItem('DB', JSON.stringify(LS));

        renderP.renderPost(title, content, id, []);
    }

    const createComment = (postId, comment) => {
        const post = LS.posts.find(item => item.id === postId);
        post.comments.push(comment);
        localStorage.setItem('DB', JSON.stringify(LS));
    }

    


    const getExistsPosts = () => {
        return LS.posts;
    }
    
    return { createPost, createComment, getExistsPosts };
}

const DB = dataHandler();