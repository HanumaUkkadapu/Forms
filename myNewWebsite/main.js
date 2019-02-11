/* here we used display instead of visibility because it makes as if the object is removed when the display is set to none. inncase of visibility, making it hidden still shows the presense of the element i.e. doesn't effct layout. */

var x = document.getElementById("author-content") ;
x.style.display = "none" ;

function authorContent(){
    if(x.style.display == "none"){
        x.style.display = "block" ;
    }
}

function closeAuthor(){
    if(x.style.display == "block"){
        x.style.display = "none" ;
    }
}
