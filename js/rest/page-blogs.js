this.body.addEventListener("pageLoaded", async () => {

    // Get the blog posts div
    const blogPostsDiv = document.getElementById('blog-container');

    // Fetch the blog posts
    const blogPostsData = await this.api('blogs');

    blogPostsDiv.innerHTML = blogPostsData.map((blogPost , index) => {
        const post = createBlogPost(blogPost , index);
        return post;
    }).join('\n');
    
    function createBlogPost(post , i) {
        const { _id, title, thumbnail, displayDate } = post;
        if(i % 4 === 0) i = 0
        return `
                <!-- News Block -->
				<div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="${i + (i * 300)}ms">
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