import React from 'react';
import classes from "./Modal.module.css";
import Input from "../input/Input";
import Button from "../button/Button";

const Modal = ({
                   children,
                   handleShow,
                   onChangeInputTask,
                   handleAdd

}) => {
    return (
        <>
          <div className={classes.modalWrapper}></div>
          <div className={classes.modalContent}>
              <Button title={'Закрыть'} action={handleShow}/>
              <Input
                  placeholder={'Написать название таска'}
                  type={'text'}
                  onChange={onChangeInputTask}
              />
              <Button title={'Добавить'} action={handleAdd}/>
              {children}
          </div>
        </>
    );
};

export default Modal;