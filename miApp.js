const textarea = document.querySelector("textarea");
const addBtn = document.querySelector(".boton-mas");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    

    const text = textarea.value;

    var d = new Date();
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");
    
    
    div.content = d;
    const br = document.createElement("br");
    
    p.textContent = text ;
    div.fecha = d;
    




    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(div);
    

} );