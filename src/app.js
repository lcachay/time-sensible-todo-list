import getTimeFrame from './utility/GetTimeFrame'
import setStylesheet from './app/SetStylesheet'

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
setStylesheet(timeframe)
