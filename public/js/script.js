

function hover(x){
    console.log(x)
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