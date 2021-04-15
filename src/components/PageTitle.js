export const setWelcomingPhrase = (element, timeframe) => {
   element.textContent = `Good ${timeframe}`
}

export const setTasksLeft = (element, tasksInProgress) => {
   if (tasksInProgress == 1)
      return element.textContent = `${tasksInProgress} task`

   element.textContent = `${tasksInProgress} tasks`
}