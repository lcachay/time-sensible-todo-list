import { newTaskHandler } from './TasksInProgress'

export const addButton = () => {
   const addTaskButtonElement = document.querySelector('.textfield-btn')
   addTaskButtonElement.addEventListener('click', event => {
      newTaskHandler(event, addTaskButtonElement.previousElementSibling)
   })
}
