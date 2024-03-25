import React, { useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal';
import TodoList from '../../components/list/TodoList';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import loadingImg from '../../common/img/loading.gif';
import Pagination from '../../components/pagination/Pagination';

const TodoPage = () => {
    const [ show, setShow ] = useState(false);
    const [ tasks, setTasks ] = useState([]);
    const [ filterOption, setFilterOption ] = useState('all');
    const [ loading, setLoading ] = useState(false);
    const [ limit ] = useState(7);
    const [ offset, setOffset ] = useState(0);

    const handleShow = () => {
        setShow(!show);
    };

    const [ inputTask, setInputTask ] = useState('');
    const [ inputSearch, setInputSearch ] = useState('');

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value);
    };

    const onChangeInputSearch = (event) => {
        setInputSearch(event.target.value);
    };

    const handleAdd = () => {
        setTasks(prev => [ ...prev, {
            id: tasks.length === 0 ? 1 : tasks[ tasks.length - 1 ].id + 1,
            title: inputTask,
            completed: false
        } ]);
    };

    const handleDone = (id) => {
        console.log(id);
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleEdit = (editTodo) => {
        console.log(editTodo);
        const updatedTasks = tasks.map(task => {
            if (task.id === editTodo.id) {
                return { ...task, title: editTodo.title };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    const filterTasks = tasks.filter(task => {
        switch(filterOption) {
            case 'completed' : return task.completed;
            case 'notCompleted' : return !task.completed;
            default: return true;
        }
    });

    const handleClear = () => {
        setTasks([]);
        localStorage.setItem('tasks', JSON.stringify([]));
    };

    const handleSearch = filterTasks.filter(task => task.title.includes(inputSearch));

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (myLocalStorage === null) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        if (myLocalStorage && myLocalStorage.length !== 0) {
            setTasks(myLocalStorage);
        }
    }, [tasks]);

    const BASE_URL = 'https://jsonplaceholder.typicode.com/';

    const getApi = async (api, limit, offset) => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}${api}/?_limit=${limit}&_start=${offset}`);
            const data = await response.json();
            return data;
        } catch(e) {
            console.log('Error', e.message);
        } finally {
            setLoading(false);
        }
    };

    const page = Math.floor(offset / limit) + 1;

    const handlePrev = () => {
        if (offset > 0) setOffset(prev => prev - limit);
    };

    const handleNext = () => {
        setOffset(prev => prev + limit);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        getApi('todos', limit, offset).then((data)=> setTasks(data));
    }, [offset, limit]);

    return (
        <>
            <Input value={inputSearch} onChange={onChangeInputSearch} placeholder={'введите текст'} type={'text'}/>
            <select value={filterOption} onChange={handleFilterChange}>
                <option value='all'>Все таски</option>
                <option value='completed'>Выполненные</option>
                <option value='notCompleted'>Не выполненные</option>
            </select>
            <Button title={'Открыть'} action={handleShow}/>
            <Button title={'Очистить'} action={handleClear}/>

            {show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                >
                </Modal>
            }
            <Pagination prev={handlePrev} page={page} next={handleNext}/>
            {loading ? <img src={loadingImg} alt="loading"/> :
                <TodoList
                    tasks={handleSearch}
                    handleDelete={handleDelete}
                    handleDone={handleDone}
                    handleEdit={handleEdit}
                />
            }
        </>
    );
};

export default TodoPage;
