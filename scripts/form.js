const formHandler = () => {
    const title = document.getElementById('postTitle');
    const content = document.getElementById('postContent');
    const createPostBtn = document.getElementById('createPostBtn');

    const checkIsEmpty = () => {
        const isDisabled = !(title.value?.length && content.value?.length);
        createPostBtn.disabled = isDisabled;
    }

    const clearForm = () => {
        title.value = '';
        content.value = '';
        createPostBtn.setAttribute("disabled", false);
    }

    postTitle.addEventListener('keyup', checkIsEmpty);
    postContent.addEventListener('keyup', checkIsEmpty);

    createPostBtn.addEventListener('click', () => {
        DB.createPost(title.value, content.value);
        checkIsEmpty();
        clearForm();
    })
}

formHandler();