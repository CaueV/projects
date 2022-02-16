import { useState } from 'react'

const AddTaskForm = ({addTask,setDisplayForm}) => {
  const [taskTitle,setTaskTitle] = useState("New Task")
  const [taskDueDate,setTaskDueDate] = useState()
  const [subTasks,setSubTasks] = useState([])

  function formatDate(date) {
    const arr = date.split('-')
    arr.push(arr.shift())
    return arr.join('/')
  }

  function storeSubtask(subtask,index){
    let tempSubtasks = subTasks
    tempSubtasks[index] = subtask
    setSubTasks(tempSubtasks)
  }

  function deleteSubTask(i){
    setSubTasks(subTasks.filter((task,index) => index !== i))
  }

  function addSubTaskField(){
    setSubTasks([...subTasks,""])
  }

  function submitTask(e){
    e.preventDefault()
    if(!taskDueDate){
      const dateInput = document.querySelector('[name="task-due-date"]')
      dateInput.classList.add("shake-error")
      dateInput.addEventListener("animationend",() => dateInput.classList.remove("shake-error")) 
      return
    }
    const subTaskElems = document.querySelectorAll('[name="task-sub-task"]')
    for (let elem of subTaskElems){
      if(!elem.value){
        elem.classList.add("shake-error")
        elem.addEventListener("animationend",() => elem.classList.remove("shake-error")) 
        return
      }
    }
    addTask(taskTitle,formatDate(taskDueDate),subTasks)
    setDisplayForm(false)
  }


  return <div className="form-area">
      <form onSubmit={submitTask}>
        <input type="text" name="task-title" value={taskTitle} onChange={ e => setTaskTitle(e.target.value)}></input>
        <p>Due date:</p>
        <input type="date" name="task-due-date" onChange={ e => setTaskDueDate(e.target.value)}></input>
        <p>Sub Tasks:</p>
        <ul className='sub-task-list'>
          {
            subTasks.map((subTask,index) => (<li key ={index} className="sub-task"><input name ="task-sub-task" onChange={ e => storeSubtask(e.target.value,index)} placeholder="new subtask"></input><div onClick={()=>deleteSubTask(index)} className="remove-task-icon hover-hand">x</div></li>))
          }
        </ul>      
        <p className="addSubTaskButton hover-hand" onClick={addSubTaskField}>Add SubTask</p>  
        <button type="submit" className="btn btn-light" >Add Task</button>
      </form>
    </div>;
};
export default AddTaskForm;
