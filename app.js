let input = document.getElementById("input")
let btn = document.getElementById("btn")
let h1 = document.getElementById("h1")
btn.onclick = function name() {
    let message = input.value.trim()
    if(message < 5){
        h1.innerHTML = "5 тен кичине"
        h1.style.with = "100%"
        h1.style.height = "150px"
        h1.style.background = "yellow"
        h1.style.display = "flex"
        h1.style.justifyContent = "center"
        h1.stylealignItems = "center"
    }
      else if(message > 5){
        h1.innerHTML = "5 тен чон"
        h1.style.with = "200px"
        h1.style.height = "200px"
        h1.style.background = "pink"
        h1.style.display = "flex"
        h1.style.justifyContent = "center"
        h1.stylealignItems = "center"
        h1.style.borderRadius = "100%"
        h1.style.margin = "auto"
    }
     else if(message = 5){
        h1.innerHTML = "бешке барабар"
        h1.style.with = "200px"
        h1.style.height = "200px"
        h1.style.background = "hotpink"
        h1.style.display = "flex"
        h1.style.justifyContent = "center"
        h1.stylealignItems = "center"
        h1.style.borderRadius = "100%"
        h1.style.margin = "auto"
    }
}