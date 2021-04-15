import GetTasksLeft from '../utility/GetTasksLeft'

export const setWelcomingPhrase = (element, timeframe) => {
   element.textContent = `Good ${timeframe}`
}

export const setTasksLeft = (element) => {
   const tasksLeft = GetTasksLeft()

   if (tasksLeft == 1)
      return element.textContent = `${tasksLeft} task`

   element.textContent = `${tasksLeft} tasks`
}