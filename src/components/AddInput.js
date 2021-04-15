import { newTaskHandler } from './TasksInProgress'

export const addInput = () => {
   const addTaskInputElement = document.querySelector('#new-task-input')
   addTaskInputElement.addEventListener('keyup', event => {
      newTaskHandler(event, addTaskInputElement)
   })
}
