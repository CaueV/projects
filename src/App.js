import Header from './components/Header'
import AddTaskButton from './components/AddTaskButton'
import AddTaskForm from './components/AddTaskForm'
import Task from './components/Task'
import { useState } from 'react'

function App() {
  const [displayForm, setDisplayForm] = useState(false); 
  const [tasks,setTasks] = useState([
    {
      id:0,
      title:'eat hot dog',
      dueDate:"03/22/2022",
      subTasks:[
        "buy ketchup",
        "buy buns"
      ]
    },
    {
      id:1,
      title:'sleep',
      dueDate:"04/02/2022",
      subTasks:[
        "turn off lights"
      ]
    },
    {
      id:2,
      title:'play smash',
      dueDate:"02/25-2022",
      subTasks:[
        "choose falcon",
        "practice combos",
        "don't die"
      ]
    },
])

function addTask (title, dueDate, subTasks){
  let id = tasks[tasks.length-1].id+1
  setTasks([...tasks,{id,title,dueDate,subTasks}])
}

function removeTask(id){
  setTasks(tasks.filter(task => task.id !== id))
  return id
}

  return (
    <div className="App">
      <div className="container-fluid todo-container">
        <Header/>
        <div className='task-area'>
          {
            tasks.map( task => <Task id={task.id} title={task.title} dueDate={task.dueDate} subTasks={task.subTasks} removeTask={removeTask}/>)
          }

          {
          (displayForm)?<AddTaskForm addTask={addTask} setDisplayForm={setDisplayForm}/>:<></>
          }
        <AddTaskButton setDisplayForm={setDisplayForm}/>
        </div>    
      </div>
    </div>
  );
}

export default App;
