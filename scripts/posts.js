const postsHandler = () => {
    const posts = document.getElementById('posts');

    const renderPost = (title, content, id, comments = []) => {

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
        posts.appendChild(post);

        commentHandler(post, id, comments);
    }

    const renderExistsPosts = () => {
        const oldPosts = DB.getExistsPosts();
        oldPosts.map(post => {
            renderPost(post.title, post.content, post.id, post.comments);
        });
    }

    return { renderPost, renderExistsPosts }
}

const renderP = postsHandler();
renderP.renderExistsPosts();