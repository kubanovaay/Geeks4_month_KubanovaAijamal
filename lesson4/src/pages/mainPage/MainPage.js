import React, { useEffect, useState } from 'react';
import Buttons from "../../components/buttons/Buttons";
import Modal from "../../components/modal/Modal";
import TodoList from "../../components/list/TodoList";
import Button from "../../components/button/Button";


const MainPage = () => {
    // const navBar = ['Главная', 'Контакты', 'О нас', 'О нас']
    // let show = false
    // console.log(show, 'start');
    const [show, setShow] = useState(false)
    // console.log(show, 'showshowshowshow');
    const [tasks, setTasks] = useState([
        {
            id:1 ,
            title: 'coding',
            completed: false
        },
        {
            id:4,
            title: 'eat',
            completed: false
        },
        {
            id:5,
            title: 'sleep',
            completed: false
        }
    ])
    // console.log(tasks);
    const handleShow = () => {
        // show = true
        // console.log(show, ' end');
        setShow(!show)
    }
    const [inputTask, setInputTask] = useState('')
    const onChangeInputTask = (event) => {
        setInputTask(event.target.value)
    }

    const handleAdd = ()=> {
        setTasks(prev=>[...prev, {
            id: tasks.length===0 ? 1 : tasks[tasks.length-1].id+1,
            title: inputTask,
            completed: false
        }])
    }

    const handleDone = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    const handleEdit=(editTodo) => {
        console.log(editTodo)
    }



    const handleDelete = (id) => {
        setTasks(tasks.filter(task=>task.id!==id))
    }

    // const a= [1,2,3,4,5]
    // const b= [5,1,8,9,4,1,2,3,4,5]
    // console.log([...a,...b]);

    useEffect(()=> {
        console.log('useEffect');
    },[tasks])



    return (
        <>
            { show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                >
                    {/*<input type="text"*/}
                    {/*onChange={(event=> setInputValue(event.target.value))}*/}
                    {/*/>*/}
                </Modal>
            }

            <TodoList
                tasks={tasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />
            <Buttons/>
            <Button title={'Открыть'} action={handleShow}/>
            {/*<Header navBar={navBar}/>*/}
            {/*<User name={'Bakyt'} age={18}/>*/}
            {/*<User name={'Kuban'} age={30}/>*/}
            {/*<User name={'Ermek'} age={10}/>*/}
            {/*<Input/>*/}
            {/*<Example>*/}
            {/*    <p style={{color: 'red', fontSize: '20px'}} >User</p>*/}
            {/*    <p>Age</p>*/}
            {/*</Example>*/}
        </>
    );
};

export default MainPage;