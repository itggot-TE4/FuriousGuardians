
// const template = document.querySelector('#repo')
// const repo = template.content.cloneNode(true).querySelector('.repo')
function renderRepos(repoData) {
    const template = document.querySelector('#repo')

    box = document.querySelector(".TemplateDisplay")
    for (const repo of repoData) {
        repobox = template.content.cloneNode(true).querySelector('.repo')

        repobox.querySelector(".header").innerHTML = repo["name"]
        repobox.querySelector(".repoToGithub").href = repo["github_url"]
        repobox.querySelector(".forkAmount").innerHTML = repo["forks_count"]

        repobox.querySelector(".repoToForks").addEventListener("click", fetchForks(repo["forks_url"]))


        box.appendChild(repobox)
    }
}

async function fetchRepos(name) {
    const response = await fetch(`http://localhost:9292/users/${name}/repos`)
    const result = await (response.json())

    renderRepos(result)
}

async function fetchForks(url) {

}

document.getElementById("search").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        fetchRepos(document.getElementById("search").value)
    }
});

function hover(x){
    if(x){
        document.getElementById("searchbar").style.backgroundColor = "white";
        document.getElementById("search").style.color = "black";
        document.getElementById("icon").style.color = "black";
    }else{
        document.getElementById("searchbar").style.backgroundColor = "rgb(221, 116, 116)";
        document.getElementById("search").style.color = "white";
        document.getElementById("icon").style.color = "white";
    }
}

