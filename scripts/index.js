// const dataHandler = () => {
//     let LS = null;

//     if (localStorage.getItem('DB')) {
//         LS = JSON.parse(localStorage.getItem('DB'));
//     } else {
//         LS = {posts: []};
//     }

//     const createPost = (title, content) => {
//         LS.posts.push({title, content});
//         localStorage.setItem('DB', JSON.stringify(LS));

//         render.renderPost(title, content);
//     }

//     const getExistsPosts = () => {
//         return LS.posts;
//     }

//     return { createPost, getExistsPosts }
// }

// const DB = dataHandler();

// const renderHandler = () => {
//     const posts = document.getElementById('posts');

//     const renderPost = (title, content) => {
//         const post = document.createElement('div');
//         post.classList.add('post');
        
//         const postTitle = document.createElement('div');
//         postTitle.innerHTML = title;
//         postTitle.classList.add('postTitle');
//         post.appendChild(postTitle);

//         const postContent = document.createElement('div');
//         postContent.innerHTML = content;
//         postContent.classList.add('postContent');
//         post.appendChild(postContent);

//         const postComments = document.createElement('button');
//         postComments.innerHTML = 'show comments';
//         postComments.classList.add('showComments');
//         post.appendChild(postComments);

//         posts.appendChild(post);

//         // console.log(post)
//     }

//     const renderExistsPosts = () => {
//         const oldPosts = DB.getExistsPosts();
//         oldPosts.map(post => {
//             renderPost(post.title, post.content);
//         });
//     }

//     return { renderPost, renderExistsPosts, renderComments }

// }

// const render = renderHandler();
// render.renderExistsPosts();

// const formHandler = () => {
//     const title = document.getElementById('postTitle');
//     const content = document.getElementById('postContent');
//     const button = document.getElementById('button');

//     const checkIsEmpty = () => {
//         const isDisabled = !(title.value?.length && content.value?.length);
//         button.disabled = isDisabled;
//     }

//     const clearForm = () => {
//         title.value = '';
//         content.value = '';
//     }

//     postTitle.addEventListener('keyup', checkIsEmpty);
//     postContent.addEventListener('keyup', checkIsEmpty);

//     button.addEventListener('click', () => {
//         DB.createPost(title.value, content.value);
//         checkIsEmpty();
//         clearForm();
//     })
// }

// formHandler();