import React from 'react';
import classes from "./User.module.css";

const User = ({name, age}) => {

    // console.log(name, age)
    // const users = {
    //     name: 'Aijamal',
    //     age: '19'
    // }
    // console.log(users.name)


    //
    // const {name} = users
    //
    // console.log(name)
    return (
        <div>
            <p className={classes.user}>User: {name}</p>
            <p className='user'>User: {name}</p>
            <p className={classes.age}>Age: {age}</p>
        </div>
    );
};

export default User;