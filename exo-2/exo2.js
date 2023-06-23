window.addEventListener("DOMContentLoaded", function() {

    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response)
    {
        return response.json();
    })
    .then(function(user)
    {
        console.log(user);
        let dl = document.querySelector("dl");
        let name = document.createElement("dt");
        name.textContent = user.name;
        let email = document.createElement("dd");
        email.textContent = user.email;
        let website = document.createElement("dd");
        website.textContent = user.website;


        dl.appendChild(name);
        dl.appendChild(email);
        dl.appendChild(website);

        fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then(function(response)
        {
            return response.json();
        })
        .then(function(posts)
        {
            console.log(posts);
            let dd = document.createElement("dd");
            dd.textContent = "Posts :";
            dl.appendChild(dd);
            let ul = document.createElement("ul");
            dd.appendChild(ul);

            for (let post of posts)
            {
                let li = document.createElement("li");
                let newPost = document.createElement("dl");
                let title = document.createElement("dt");
                title.textContent = post.title;
                let body = document.createElement("dd");
                body.textContent = post.body;
                newPost.appendChild(title);
                newPost.appendChild(body);
                li.appendChild(newPost);
                ul.appendChild(li);
            }
        })
    })
})