import React from 'react';
import Buttons from "../../components/buttons/Buttons";
import User from "../user/User";
import Input from "../input/Input";
import Example from "../../components/example/Example";
import Header from "../../components/header/Header";

const MainPage = () => {
    const navBar = ['Главная', 'Контакты', 'О нас', 'О нас']
    return (
        <>
            <Buttons />
            <Header navBar={navBar}/>
            <User name = {'Aijamal'} age = {19}/>
            <User name = {'Dastan'} age = {20}/>
            <User name = {'Zyinat'} age = {20}/>
            <Input />
            <Example>
                <p style={{color: 'red', fontSize: '20px'}}>User</p>
                <p>Age</p>
            </Example>
            <input/>
        </>
    );
};

export default MainPage;