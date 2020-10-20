//  render repos
function renderRepos(repoData) {
    const template = document.querySelector('#repo')

    box = document.querySelector(".TemplateDisplay")
    for (const repo of repoData) {
        repobox = template.content.cloneNode(true).querySelector('.repo')

        repobox.querySelector(".header").innerHTML = repo["name"]
        repobox.querySelector(".repoToGithub").href = repo["github_url"]
        repobox.querySelector(".forkAmount").innerHTML = repo["forks_count"]

        forkLink = repobox.querySelector(".repoToForks")
        forkLink.setAttribute("fullname", repo["full_name"])
        forkLink.addEventListener("click", fetchForks)


        box.appendChild(repobox)
    }
}

async function fetchRepos(name) {
    const response = await fetch(`http://localhost:9292/users/${name}/repos`)
    const result = await (response.json())

    renderRepos(result)
}


//  render forks
async function fetchManifest(name) {
    const response = await fetch(`http://localhost:9292/repos/${name}/contents/.manifest.json`)
    const result = await (response.json())
    return result
}

async function fetchCode(name, path) {
    const response = await fetch(`http://localhost:9292/repos/${name}/contents/${path}`)
    const result = await (response.json())
    return result
}

async function renderForks(forkData) {
    const template = document.querySelector('#gaffel')

    forkLayout = document.querySelector(".TemplateDisplay")
    forkLayout.classList.add("forkLayout")
    forkLayout.classList.remove("TemplateDisplay")
    
    for (const fork of forkData) {

        manifest = await fetchManifest(fork["name"])
        code = await fetchCode(fork["name"], manifest["filePath"])


        forkbox = template.content.cloneNode(true).querySelector('.fork')

        forkbox.querySelector(".repoPath").innerHTML = fork["name"]
        forkbox.querySelector(".codeWindow").innerHTML = code
        forkbox.querySelector(".forkToGithub").href = fork["github_url"]

        testbox = forkbox.querySelector(".tests")
        for (const test of manifest["tests"]) {
            t = document.createElement("div")
            t.classList.add("test")
            t.innerHTML = `Test "${test["description"]}:" Passed`

            testbox.appendChild(t)
        }
        
        hljs.highlightBlock(forkbox.querySelector('code'))
        box.appendChild(forkbox)
        
    }
    
}

async function fetchForks(e) {
    resetPage()
    const response = await fetch(`http://localhost:9292/repos/${e.target.getAttribute("fullname")}/forks`)
    const result = await (response.json())

    renderForks(result)

}

function resetPage() {
    document.querySelector(".TemplateDisplay").innerHTML = "" 
}


//  other
document.getElementById("search").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        resetPage()
        fetchRepos(document.getElementById("search").value)
    }
});

function hover(x) {
    if (x) {
        document.getElementById("searchbar").style.backgroundColor = "white";
        document.getElementById("search").style.color = "black";
        document.getElementById("icon").style.color = "black";
    } else {
        document.getElementById("searchbar").style.backgroundColor = "rgb(221, 116, 116)";
        document.getElementById("search").style.color = "white";
        document.getElementById("icon").style.color = "white";
    }
}
