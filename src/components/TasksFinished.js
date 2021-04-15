import { updateNewFinishedTaskProgress } from './Progress'

export const finishedTaskList = document.querySelector('.log-container')

export const finishTaskHandler = text => {
   updateNewFinishedTaskProgress(finishedTaskList.children.length)
   createFinishedTaskElement(text)
}

const createFinishedTaskElement = (text) => {
   const finishTaskElement = document.createElement('div')
   finishTaskElement.classList = 'finished-item'
   finishTaskElement.textContent = text

   finishedTaskList.append(finishTaskElement)
}