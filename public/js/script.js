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

