import React, { useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal';
import TodoList from '../../components/list/TodoList';
import Button from '../../components/button/Button';

const MainPage = () => {
    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState('');
    const [filter, setFilter] = useState('all'); // Значение фильтра по умолчанию

    const handleShow = () => {
        setShow(!show);
    };

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value);
    };

    const handleAdd = () => {
        setTasks(prev => [...prev, {
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            title: inputTask,
            completed: false
        }]);
    };

    const handleDone = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    };

    const handleEdit = (editTodo) => {
        setTasks(tasks.map(task => {
            if (task.id === editTodo.id) {
                return { ...task, title: editTodo.title };
            }
            return task;
        }));
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleClearAllTasks = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (myLocalStorage && myLocalStorage.length !== 0) {
            setTasks(myLocalStorage);
        }
    }, []);

    const sendLocalStorage = () => {
        localStorage.setItem('name', 'Baktybek');
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getLocalStorage = () => {
        console.log(JSON.parse(localStorage.getItem('tasks')));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'uncompleted') {
            return !task.completed;
        } else {
            return true; // Показать все задачи
        }
    });

    return (
        <>
            <Button title={'LocalStorage'} action={sendLocalStorage}/>
            <Button title={'Get LocalStorage'} action={getLocalStorage}/>
            <Button title={'Clear All Tasks'} action={handleClearAllTasks}/>

            {/* Компонент select для фильтрации задач */}
            <div style={{ marginTop: '10px' }}>
                <select value={filter} onChange={handleFilterChange} style={selectStyle}>
                    <option value="all">Все таски</option>
                    <option value="completed">Выполненные</option>
                    <option value="uncompleted">Не выполненные</option>
                </select>
            </div>

            {show &&
                <Modal
                    handleShow={handleShow}
                    onChangeInputTask={onChangeInputTask}
                    handleAdd={handleAdd}
                />
            }
            <TodoList
                tasks={filteredTasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />
            <Button title={'Открыть'} action={handleShow}/>
        </>
    );
};

export default MainPage;

// Инлайн стили для select
const selectStyle = {
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#95bbe3',
    fontSize: '16px',
    cursor: 'pointer'
};


