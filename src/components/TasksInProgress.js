import { updateNewTaskProgress } from './Progress'


export const taskList = document.querySelector('.in-progress-list')

export const newTaskHandler = (buttonElement) => {
   const textInputElement = buttonElement.previousElementSibling
   
   createNewTaskElement(textInputElement.value)

   textInputElement.value = ''

   updateNewTaskProgress(taskList.children.length)
}

const createNewTaskElement = (text) => {
   const newTaskElement = document.createElement('li')
   newTaskElement.classList = 'in-progress-item'
   newTaskElement.textContent = text

   document.querySelector('.in-progress-list').append(newTaskElement)
}