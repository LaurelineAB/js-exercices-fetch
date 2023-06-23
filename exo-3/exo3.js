window.addEventListener("DOMContentLoaded", function() {

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(response) 
    {
        return response.json();
    })
    .then(function(post) {
        let title = document.querySelector("article header h2");
        title.textContent = post.title;
        let body = document.querySelector("article p");
        body.textContent = post.body;

        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        .then(function(response)
        {
            return response.json();
        })
        .then(function(comments)
        {
            let footer = document.querySelector("article footer");
            let ul = document.createElement("ul");
            footer.appendChild(ul);
            console.log(comments);

            for (let comment of comments)
            {
                let li = document.createElement("li");
                li.textContent = comment.body;
                ul.appendChild(li);
            }
        })
    })
})