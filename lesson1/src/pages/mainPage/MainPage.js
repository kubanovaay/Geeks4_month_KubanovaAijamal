import React from 'react';
import Buttons from "../../components/buttons/Buttons";
import User from "../user/User";
import Input from "../input/Input";
import Example from "../../components/example/Example";

const MainPage = () => {
    return (
        <>
            <Buttons />
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