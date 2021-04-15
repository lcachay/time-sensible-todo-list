import { updateNewFinishedTaskProgress } from './Progress'
import { tasksInProgress, tasksFinished, tasksLeftElement } from '../app/Globals'
import { setTasksLeft } from './PageTitle'


export const finishedTaskList = document.querySelector('.log-container')

export const finishTaskHandler = text => {
   updateNewFinishedTaskProgress(finishedTaskList.children.length)

   createFinishedTaskElement(text)

   const tasksInProgressFiltered = tasksInProgress.filter(task => task !== text)
   tasksInProgress.splice(0, tasksInProgress.length, ...tasksInProgressFiltered);
   
   tasksFinished.push(text)

   setTasksLeft(tasksLeftElement, tasksInProgress.length)
   
}

const createFinishedTaskElement = (text) => {
   const finishTaskElement = document.createElement('div')
   finishTaskElement.classList = 'finished-item'
   finishTaskElement.textContent = text

   finishedTaskList.append(finishTaskElement)
}