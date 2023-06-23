window.addEventListener("DOMContentLoaded", function() {

    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response)
    {
        return response.json();
    })
    .then(function(user)
    {
        let name = document.querySelector("h1");
        name.textContent = user.name;

        fetch("https://jsonplaceholder.typicode.com/users/1/albums")
        .then(function(response)
        {
            return response.json();
        })
        .then(function(albums)
        {
            let albumsList = document.getElementById("albums");

            for (let album of albums)
            {
                let li = document.createElement("li");
                let albumTitle = document.createElement("h2");
                albumTitle.textContent = album.title;
                li.appendChild(albumTitle);
                albumsList.appendChild(li);

                fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
                .then(function(response)
                {
                    return response.json();
                })
                .then(function(photos)
                {
                    let photosList = document.createElement("ul");
                    li.appendChild(photosList);
                    for (let photo of photos)
                    {

                        let photoTitle = document.createElement("li");
                        photoTitle.textContent = photo.title;
                        photosList.appendChild(photoTitle);

                    }
                })
            }
        })
    })
})