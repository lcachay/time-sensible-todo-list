import { updateNewTaskProgress } from './Progress'
import { finishTaskHandler } from './TasksFinished'


export const taskList = document.querySelector('.in-progress-list')

export const newTaskHandler = (buttonElement) => {
   const textInputElement = buttonElement.previousElementSibling
   
   updateNewTaskProgress(taskList.children.length)

   
   createNewTaskElement(textInputElement.value)

   textInputElement.value = ''

}

const createNewTaskElement = (text) => {
   const newTaskElement = document.createElement('li')
   newTaskElement.classList = 'in-progress-item'
   newTaskElement.textContent = text

   taskList.append(newTaskElement)
}

taskList.addEventListener('click', event => {
   finishTaskHandler(event.target.textContent.trim())
   event.target.remove()
})