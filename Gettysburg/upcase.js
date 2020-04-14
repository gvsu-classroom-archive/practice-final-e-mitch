document.getElementById("decorate").addEventListener("click", addDecoration);

function addDecoration(){
    capsArray = document.getElementsByClassName("allcaps");
    for(i = 0; i < capsArray.length; i++){
        capsArray[i].style.textTransform = "uppercase";
    }
    upcaseArray = document.getElementsByClassName("upcase");
    for(x = 0; x < upcaseArray.length; x ++){
        upcaseArray[x].style.textTransform = "capitalize";
    }
}