let forma = document.getElementById("forma");
let orden = document.getElementById("orden")
let cont= document.getElementById("cont")
let color = document.getElementById("color");
let nombre = document.getElementById("nombre");
let save_btn = document.getElementById("save-btn");
let print = document.getElementById("list-container");
let or= [];

orden.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(orden);
    or.push({
        name: data.get("name"),
        or: data.get("or"),
        color:data.get("color"),
    }),
    print_tasks();
});

const print_tasks = () => {
    print.innerHTML = ""
    print.insertAdjacentHTML('beforeend',`
    <div class="${forma.value}" style="background-color:${color.value} ;" id="pintado">
    <p>${nombre.value}<p>
    </div>
    `)
}
save_btn.addEventListener("click", ()=>{
    console.log(forma.value);
    print_tasks();
})

