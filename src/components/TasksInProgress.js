import { updateNewTaskProgress } from './Progress'
import { finishTaskHandler } from './TasksFinished'
import { setTasksLeft } from './PageTitle'
import { tasksInProgress, tasksCreated, tasksLeftElement } from '../app/Globals'


export const taskList = document.querySelector('.in-progress-list')

export const newTaskHandler = (textInputElement) => {
   if(!textInputElement.value.trim())
      return
   
   updateNewTaskProgress(taskList.children.length)


   createNewTaskElement(textInputElement.value.trim())
   
   tasksInProgress.push(textInputElement.value.trim())
   tasksCreated.push(textInputElement.value.trim())

   textInputElement.value = ''

   setTasksLeft(tasksLeftElement, tasksInProgress.length)
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