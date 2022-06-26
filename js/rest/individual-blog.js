this.body.addEventListener("pageLoaded", async () => {

    // Get the blog posts div
    const blogPostsDiv = document.getElementById('blog-container');
    const blogWidgetDiv = document.getElementById('blog-widget-container');
    const blogTagsDiv = document.getElementById('blog-tags-container');
    const blogAuthorDiv = document.getElementById('blog-author-container');

    // Get blog ID
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id');

    // Fetch the blog posts & insert data
    const blogPostsData = await this.api(`blogs?id=${blogId}`);
    const targetBlog = blogPostsData.find(blogPost => blogPost._id === blogId) || blogPostsData[0];
    blogPostsDiv.innerHTML = createBlogPost(targetBlog);

    // Update blog widget
    blogWidgetDiv.innerHTML = blogPostsData.slice(0, 5).map((blogData) => {
        const { _id, title, thumbnail, displayDate } = blogData;
        return `
        <article class="post">
        <div class="post-inner">
            <figure class="post-thumb"><a href="blog.html?id=${_id}"><img
                        src="${thumbnail}" alt=""></a></figure>
            <div class="post-info">${displayDate}</div>
            <div class="text"><a href="blog.html?id=${_id}">${title}</a></div>
        </div>
        </article>
        `
    }).join("\n")

    // Update blog tags
    if(targetBlog.tags.length > 0) {
        blogTagsDiv.innerHTML = JSON.parse(targetBlog.tags).map((t) => {
            return `<a>${t}</a>`;
        }).join("\n");
    }
    else {
        blogTagsDiv.innerHTML = `<a>No tags</a>`
    }
   
    // Update blog author
    let authorAvatar = "images/avatars/default.png";
    if(targetBlog.author_icon && targetBlog.author_icon.startsWith("avatars"))  authorAvatar = `images/${targetBlog.author_icon}`;
    else if(targetBlog.author_icon) authorAvatar = `https://imageproxy.blitzesports.org/-/rs:fit:160:166/plain/${targetBlog.author_icon}`

    blogAuthorDiv.innerHTML = `
    <figure class="thumb"><img src="${authorAvatar}" alt=""></figure>
    <h3 class="name">${targetBlog.author_name || "Anonymous"}</h3>
    <div class="text">${targetBlog.author_description || "No Description"}</div>
    `

    function createBlogPost(post) {
        const { _id, title, thumbnail, displayDate, content, author_name } = post;
        return `
        <div class="image-box">
                                        <figure class="image"><img src="${thumbnail}" alt=""></figure>
                                    </div>
                                    <div class="lower-content">
                                        <div class="post-date">${displayDate}</div>
                                        <h3>${title}</h3>
                                        <ul class="post-info">
                                            <li>by <a href="blog.html#">${author_name}</a></li>
                                        </ul>
                                        <p>${content}</p>
                                    </div>
        `
    };

})