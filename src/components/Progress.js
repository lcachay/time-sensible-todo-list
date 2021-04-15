import { finishedTaskList } from './TasksFinished'
import { taskList } from './TasksInProgress'

export const setTasksProgress = (tasks, action) => {
   const element = document.querySelector(`.tasks-${action}`)
   
   element.querySelector('.progress-num').textContent = `${tasks}`
   
   if (tasks == 1)
      return element.querySelector('.progress-description').textContent = `task ${action}`
   
   element.querySelector('.progress-description').textContent = `tasks ${action}`
}

export const updateNewTaskProgress = (tasks) => {
   const tasksLeftElement = document.querySelector(`.tasks-left`)
   const tasksCreatedElement = document.querySelector(`.tasks-created`)
   
   tasksLeftElement.querySelector('.progress-num').textContent = `${tasks + 1}`
   tasksCreatedElement.querySelector('.progress-num').textContent = `${tasks + 1 + finishedTaskList.children.length }`
   
}

export const updateNewFinishedTaskProgress = (tasks) => {
   const tasksLeftElement = document.querySelector(`.tasks-left`)
   const tasksFinishedElement = document.querySelector(`.tasks-finished`)
   
   tasksLeftElement.querySelector('.progress-num').textContent = `${taskList.children.length - 1}`
   tasksFinishedElement.querySelector('.progress-num').textContent = `${tasks + 1 }`
   
}