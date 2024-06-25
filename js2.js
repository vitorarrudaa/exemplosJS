const container = document.querySelector ("#container"); //colocar um elemento html em uma variavel
const p = document.createElement ("p");
const h3 = document.createElement ("h3");
const div = document.createElement ("div");
const h1 = document.createElement ("h1");
const p1 = document.createElement ("p");

h3.textContent = ("Hi, i'm a blue h3"); //adicionar texto na variavel
p.textContent = ("Hi, i'm red");
h1.textContent = ("I'm in a div!");
p1.textContent = ("Me too!");

p.style.cssText = ("color: red"); //mudar o estilo do elemento dentro da variavel
h3.style.cssText = ("color: blue");
div.setAttribute ("style", "border: 2px solid black; background: pink");

container.appendChild(p); //adicionar um elemento dentro de outro no DOM
container.appendChild(h3);
container.appendChild(div);
div.appendChild(h1);
div.appendChild(p1);

const botao = document.querySelector("#botao");
botao.addEventListener ("click", e => (e.target.style.background = "blue")); //adicionar um evento no DOM

const ul = document.querySelector ("ul");
const input = document.querySelector ("input");
const button = document.querySelector ("button");



button.addEventListener ("click", 
    function guardar (){
        let item = input.value;
        input.value = ""

        const li = document.createElement ("li");
        const span = document.createElement ("span");
        const del_button = document.createElement ("button");

        del_button.textContent = ("Delete");
        span.textContent = (item);

        li.appendChild (span);
        li.appendChild (del_button);
        ul.appendChild (li);

        del_button.addEventListener ("click", () => {
            ul.removeChild(li);
        })

        input.focus();
});
