const input = document.querySelector('#input')
const creatButton = document.querySelector('#create_button')
const todoList = document.querySelector("#todo_list")


const createTodo = () => {
    if(input.value.trim() === ''){
        return alert('Нельзя вводить пустоту или пробелы')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButtons = document.createElement('button')
    divButtons.setAttribute('class', 'div_buttons')

    const text = document.createElement('h3')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')

    editButton.onclick = () =>{
        document.getElementById("modal").style.display = "block"
        document.getElementById("editInput").value = text.textContent
        document.getElementById("inputEdit").value = ""

        document.getElementById("ok").onclick = ()=> {
            const editTodo = document.getElementById("inputEdit").value
            if (!editTodo.trim()) return alert("Нельзя вводить пустоту или пробелы!")
              text.textContent = editTodo
              document.getElementById("modal").style.display = "none"

        }
    }
    const cancel = document.getElementById("close")
    cancel.onclick = () => {
        document.getElementById("modal").style.display = "none"
    }




    deleteButton.innerHTML = 'DELETE'
    editButton.innerHTML = 'EDIT'
    text.innerHTML = input.value
    divButtons.append(deleteButton,editButton)
    div.append(text, divButtons)





    deleteButton.onclick = () => div.remove()
    text.addEventListener('click',() => text.classList.toggle('toggle'))

    todoList.prepend(div)
    input.value = ''



}

window.onclick = (event) =>{
    if (event.target.className === "modal"){
        event.target.style = "none"
    }
}

creatButton.onclick = () => createTodo()
window.onkeydown = (event) =>{
    if (event.code === "Enter"){
        createTodo()
    }
}
const buttonPlus = document.getElementById("button2")
const buttonMinus = document.getElementById("button1")
const inputNums = document.getElementById("inputNums")

function editColors (){
    const i = inputNums.value
    if (i > 0){
        inputNums.style.color = "green"

    } else  if (i < 0){
        inputNums.style.color = "red"

    }else {
        inputNums.style.color = "gray"
    }
}
buttonPlus.onclick = () => {
    inputNums.value++
    editColors()

}
buttonMinus.onclick = () => {
    inputNums.value--
    editColors()

}