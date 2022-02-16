const Task = (props) => {
    function deleteTask(){
        props.removeTask(props.id)
    }
    function toggleSubTasks(id){
        const subTaskArea = document.querySelectorAll('.sub-task-row')[id]
        if (subTaskArea.style.display === "none") {
            subTaskArea.style.display = "block";
        } else {
            subTaskArea.style.display = "none";
        }
    }
    
    return <div key={props.id} className="task">
            <div className="task-row">
                <h4>{props.title} {(props.subTasks.length > 0)? (<svg className="hover-hand" onClick={()=>toggleSubTasks(props.id)} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>):""}</h4>
                <p>Due: {props.dueDate}<button onClick={deleteTask} className="remove-task-icon"> x </button></p>         
            </div>
            <div className="sub-task-row">
                {props.subTasks.map(subtask => <p>{subtask}</p>)}
            </div>
        </div>;
};

export default Task;
