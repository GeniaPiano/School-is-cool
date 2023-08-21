import React from 'react';
import {Task} from "./Task";

export const TasksList = ({tasks, remove, handleChangeStatus}) => {

    const activeTasks = tasks
        .filter(task => task.active === true)
        .map(task => <Task key={task.id} task={task} remove={remove} handleChangeStatus={handleChangeStatus}/>)

    const doneTasks = tasks
        .filter(task => task.active === false)
        .sort((a, b) =>  b.finishDate - a.finishDate)
        .map(task => <Task key={task.id} task={task} remove={remove} handleChangeStatus={handleChangeStatus}/>)

    return (
        <>
            <div className="active">
                <h2>Lista tasków do zrobienia</h2>
                {activeTasks.length === 0 ? 'Brak zadań, hurra!!!' : activeTasks}


            </div>
            <hr/>
            <div className="done">
                <h3>Taski zrobione ({doneTasks.length})</h3>
                {doneTasks.length > 5 ? <span>wyświetlono tylko 5 z {doneTasks.length} zrobionych zadań. </span> : null}
                {doneTasks}
            </div>

        </>


    )
}