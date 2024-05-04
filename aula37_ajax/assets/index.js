const loadData = () => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.github.com/users/jeiel2013")
    xhr.send(null);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const res = JSON.parse(xhr.responseText)
            
            const name = res.name
            const avatarUrl = res.avatar_url
            const followers = res.followers
            const blogUrl = res.blog
            // console.log({name, avatarUrl, followers, blogUrl})

            // <img src="https://avatars.githubusercontent.com/u/89713628?v=4" width="128" />
            const avatarEl = document.createElement("img")
            avatarEl.setAttribute("width", "128")
            avatarEl.setAttribute("src", avatarUrl)

            //<h1>Jeiel</h1>
            const nameEl = document.createElement("h1")
            nameEl.innerText = name

            //<p>Followers: XXX</p>
            const followersEl = document.createElement("p")
            followersEl.innerText = `Followers: ${followers}`

            //<a>https://</a>
            const blogEl = document.createElement("a")
            blogEl.setAttribute("href", `https://${blogUrl}`)
            blogEl.innerText = blogUrl

            document.body.appendChild(avatarEl)
            document.body.appendChild(nameEl)
            document.body.appendChild(followersEl)
            document.body.appendChild(blogEl)
        }
    }
}


const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", loadData)