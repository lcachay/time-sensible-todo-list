import getTimeFrame from './utility/GetTimeFrame'
import setStylesheet from './app/SetStylesheet'
import { addButton } from './components/AddButton'
import { setTasksProgress } from './components/Progress'
import { setWelcomingPhrase, setTasksLeft } from './components/PageTitle'
import { tasksInProgress, tasksFinished, tasksCreated, tasksLeftElement } from './app/Globals'

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

const inProgressListElement = document.querySelector('.in-progress-list')
const timeframe = getTimeFrame(new Date().getHours())

setStylesheet(timeframe)

setWelcomingPhrase(document.querySelector('#welcoming-phrase'), timeframe)

Array.from( inProgressListElement.children )
   .forEach( task => {
      tasksInProgress.push( task.textContent.trim() );
      tasksCreated.push(task.textContent.trim() )
   } )

Array.from( document.querySelector('#log-list').children )
   .forEach( task => {
      tasksFinished.push( task.textContent.trim() )
      tasksCreated.push( task.textContent.trim() )
   } )

setTasksLeft(tasksLeftElement, tasksInProgress.length)

setTasksProgress(tasksCreated.length, 'created')
setTasksProgress(tasksFinished.length, 'finished')
setTasksProgress(tasksInProgress.length, 'left')


addButton()

