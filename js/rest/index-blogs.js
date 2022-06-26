this.body.addEventListener("pageLoaded", async () => {

    // Get the blog posts div
    const blogPostsDiv = document.getElementById('blog-container');

    // Fetch the blog posts
    const blogPostsData = await this.api('blogs');

    blogPostsData.slice(0, 3).forEach((blogPost, i) => {
        const post = createBlogPost(blogPost, i);
        blogPostsDiv.innerHTML += post;
    });

    function createBlogPost(post, i) {
        const { _id, title, thumbnail, displayDate } = post;
        return `
                <!-- News Block -->
				<div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="${i + (i * 300)}ms" data-wow-duration="1500ms">
					<div class="inner-box hvr-bob">
						<div class="image">
							<a href="blog.html?id=${_id}"><img src="${thumbnail}" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="post-date">${displayDate}</div>
							<h3><a href="blog.html?id=${_id}">${title}</a></h3>
						</div>
					</div>
				</div>
                `
    };

})