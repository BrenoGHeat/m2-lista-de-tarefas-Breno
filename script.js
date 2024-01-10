const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];


function renderElements(tasks){
  
  const captureUl = document.querySelector(".tasks__list");

    captureUl.innerHTML = ""

      for(let i = 0; i < tasks.length ; i++) {
        const task = createTaskItem(tasks[i]);
          createTaskItem(task);
      
 }
} ;


function createTaskItem(task){


  const ul = document.querySelector(".tasks__list");

  const li = document.createElement("li");
        li.classList.add("task__item");


  const div = document.createElement("div");
         div.classList.add("task-info__container");

  const span = document.createElement("span");
        span.classList.add("task-type");


  const paragraphSpan = document.createElement("p");
          paragraphSpan.innerText = task.title ;


  const liButton = document.createElement("button");
        liButton.classList.add("task__button--remove-task");


        if( task.type === "Urgente" ){
          span.classList.add("span-urgent");
        } else if ( task.type === "Importante"){
          span.classList.add("span-important"); 
        } else if( task.type === "Normal") {
          span.classList.add("span-normal");
        } ;


        div.appendChild(span);
        div.appendChild(paragraphSpan);

        li.appendChild(div);
        li.appendChild(liButton);
        ul.appendChild(li);
         

}

renderElements(tasks);


const form = document.querySelector(".form__container");
 
form.addEventListener('submit' , function (event){
    
    event.preventDefault();
    
    const inputTask = document.querySelector(".form__input--text").value;
    const selectPriority = document.querySelector(".form__input--priority").value;

    console.log(inputTask);
    console.log(selectPriority);

    createTaskItem({title:inputTask, type:selectPriority});
    
  
});

renderElements(tasks);