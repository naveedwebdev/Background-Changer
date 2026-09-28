


let bjchanger = document.getElementById("button")
let colorn = document.getElementById("color")

let colors = ["Red","Green","Orange","Blue","Purple","White","Gray","Yellow"]
let body = document.getElementsByTagName("body")[0]

const bjchangerhandler = () => {
    console.log("naveed");
    let randomnum = Math.floor (Math.random() * colors.length);

    console.log(randomnum);
    
    body.style.backgroundColor = colors[randomnum]
    colorn.innerHTML = "Color Name:" + "" + colors[randomnum]
}



bjchanger.addEventListener("click", bjchangerhandler)









