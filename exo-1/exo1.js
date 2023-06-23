window.addEventListener("DOMContentLoaded", function() {
    let ul = document.querySelector("ul");
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(users)
    {
        for (let user of users)
        {
            let li = document.createElement("li");
            li.textContent = user.name;
            ul.appendChild(li);
        }
    })
})