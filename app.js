const form = document.querySelector(".add");
const ul = document.querySelector(".todos")

const generateTemplate = todo => {
    const html =`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
    `;

    ul.innerHTML += html;
}

form.addEventListener("submit", e=>{
    e.preventDefault()
    const todo = form.add.value.trim();

    if(todo.length){
       generateTemplate(todo)  
       form.reset()
    }

   
  
})