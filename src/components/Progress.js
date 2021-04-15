export const setTasksProgress = (element, tasks, action) => {
   element.querySelector('.progress-num').textContent = `${tasks}`
   
   if (tasks == 1)
      return element.querySelector('.progress-description').textContent = `task ${action}`
   
   element.querySelector('.progress-description').textContent = `tasks ${action}`
}