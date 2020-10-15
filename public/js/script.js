function renderRepos(repoData) {
    const template = document.querySelector('#repo')
    const buss = template.content.cloneNode(true).querySelector('.')



}

async function fetchRepos(name) {
    const response = await fetch(`http://localhost:9292/api/repos/${name}`)
    const result = await (response.json())

    renderRepos(result)
}