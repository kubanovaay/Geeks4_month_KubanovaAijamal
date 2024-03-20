import React, {useState} from 'react';
import Buttons from "../../components/buttons/Buttons";
// import User from "../user/User";
// import Example from "../../components/example/Example";
// import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
// import Input from "../../components/input/Input";

const MainPage = () => {
    // const navBar = ['Главная', 'Контакты', 'О нас', 'О нас']
    // let show = false
    // console.log(show, 'start')
    const [show, setShow] = useState(false)
    // console.log(show, 'showshowshow')
    const handleShow = () => {
        // show = true
        // console.log(show, 'end')
        setShow(!show)
    }

    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <>
            { show &&
                <Modal handleShow = {handleShow} onChange={handleChange} inputValue={inputValue}>
                    {/*<h1>Modal</h1>*/}
                    {/*<input type="text"*/}
                    {/*       onChange={(event => setInputValue(event.target.value))}*/}
                    {/*/>*/}
                </Modal>

            }
            <Buttons />
            <button onClick={handleShow}>Открыть</button>
            {/*<Header navBar={navBar}/>*/}
            {/*<User name = {'Aijamal'} age = {19}/>*/}
            {/*<User name = {'Dastan'} age = {20}/>*/}
            {/*<User name = {'Zyinat'} age = {20}/>*/}
            {/*<Input />*/}
            {/*<Example>*/}
            {/*    <p style={{color: 'red', fontSize: '20px'}}>User</p>*/}
            {/*    <p>Age</p>*/}
            {/*</Example>*/}
            {/*<input/>*/}
        </>
    );
};

export default MainPage;