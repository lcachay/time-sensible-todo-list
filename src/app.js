import getTimeFrame from './utility/GetTimeFrame'
import setStylesheet from './app/SetStylesheet'
import { setWelcomingPhrase, setTasksLeft } from './components/PageTitle'

// GET USER'S TIMEFRAME
// SET STYLESHEET
// SET WELCOMING PHRASE
// GET USER'S NAME
// SAVE USER'S NAME IN BROWSER STORAGE
// IF THERE IS A NAME IN STORAGE SHOW IT
// GET NUMBER OF TASKS IN "IN PROGRESS" TASK SECTION AND SHOW THEM
// TOGGLE TASK OR TASKS ACCORDING TO NUMBER
// EVENT LISTENER ADD BUTTON: GET TEXT FROM INPUT FIELD AND ADD IT TO THE LIST OF "IN PROGRESS" TASKS, UPDATE NUMBER OF TASKS, ADD A TASK IN PROGRESS ELEMENT, UPDATE TASKS LEFT AND TASKS CREATED
// EVENT LISTENER TASK ELEMENT: REMOVE IT FROM THE LIST OF "IN PROGRESS", REMOVE TASK IN PROGRESS ELEMENT, ADD IT TO THE "FINISHED" TASK LIST, ADD A TASK FINISHED Element, UPDATE TASKS LEFT, AND TASKS FINISHED

const timeframe = getTimeFrame(new Date().getHours())
const tasksInProgress = []
const tasksFinished = []

setStylesheet(timeframe)

setWelcomingPhrase(document.querySelector('#welcoming-phrase'), timeframe)

Array.from( document.querySelector('.in-progress-list').children )
   .forEach( task => tasksInProgress.push( task.textContent.trim() ) )

Array.from( document.querySelector('#log-list').children )
   .forEach( task => tasksFinished.push( task.textContent.trim() ) )

console.log(tasksFinished);

setTasksLeft(document.querySelector('#tasks-left'), tasksInProgress.length)