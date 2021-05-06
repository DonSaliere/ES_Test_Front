import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import m from './Modal.module.css';

const Example = (props) => {
    const [add, setShow] = useState(false);
    const [deleted, setShowDel] = useState(false);
    const [chenge, setChenge,] = useState(false);

    const handleCloseAdd = () => setShow(false);
    const handleShowAdd = () => {
        props.updateContact();
        setShow(true);

    };


    const handleCloseDel = () => setShowDel(false);
    const handleShowDel = () => setShowDel(true);

    const handleCloseChenge = () => setChenge(false);
    const handleShowChenge = () => setChenge(true);

    let newNameElement = React.createRef();
    let newSurnameElement = React.createRef();
    let newEmailElement = React.createRef();
    let newBirthdayElement = React.createRef();

    const onAddNews = () => {
        props.addContact();
        handleCloseAdd();
    }

    let onUpdateContacts = () => {
        props.updateContact();
        handleCloseChenge();
    }

    let onChangeTextName = () => {
        let name = newNameElement.current.value;
        props.updateContactNameText(name);

    }

    let onChangeSurnameText = () => {
        let surname = newSurnameElement.current.value;
        props.updateContactSurnameText(surname);

    }

    let onChangeEmailText = () => {
        let email = newEmailElement.current.value;
        props.updateContactEmailText(email);

    }

    let onChangeBirthdayText = () => {
        let birthday = newBirthdayElement.current.value;
        props.updateContactBirthdayText(birthday);

    }

    let onDeleteContacts = () => {
        props.deleteContact();
        handleCloseDel();
    }

    const chengModalBody = () => {
        if (props.selectedID === null) {
            return (
                <div className={'form-group'}>
                    Вы не выбрали контакт!!!
                </div>
            )
        } else {
            return (
                <div>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeTextName}
                            ref={newNameElement}
                            value={props.newNameText}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeSurnameText}
                            ref={newSurnameElement}
                            value={props.newSurnameText}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeEmailText}
                            ref={newEmailElement}
                            value={props.newEmailText}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeBirthdayText}
                            ref={newBirthdayElement}
                            value={props.newbirthdayText}
                        />
                    </div>
                </div>
            )
        }

    }

    const deletedModalBody = () => {
        if (props.selectedID === null) {
            return (
                <div className={'form-group'}>
                    Вы не выбрали Контакт!!!
                </div>
            )
        } else {
            return (
                <div className={'form-group'}>
                    Удалить Контакт?
                </div>

            )
        }

    }

    const chengModalFooter = () => {
        return props.selectedID === null ?
            <>
                <Button variant="secondary" onClick={handleCloseChenge}>Отмена</Button>
            </> :
            <>
                <Button variant="secondary" onClick={handleCloseChenge}>Отмена</Button>
                <Button variant="primary" onClick={onUpdateContacts}>Применить</Button>
            </>
    }

    const deletdModalFooter = () => {
        return props.selectedID === null ?
            <>
                <Button variant="secondary" onClick={handleCloseDel}>Отмена</Button>
            </> :
            <>
                <Button variant="secondary" onClick={handleCloseDel}>Отмена</Button>
                <Button variant="primary" onClick={onDeleteContacts}>Применить</Button>
            </>
    }

    return (
        <>
            <div className={m.container}>
                <Button className={m.btn} variant="primary" onClick={handleShowAdd}>
                    Добавить
                </Button>
                <Button className={m.btn} variant="primary" onClick={handleShowChenge}>
                    Изменить
                </Button>
                <Button className={m.btn} variant="primary" onClick={handleShowDel}>
                    Удалить
                </Button>
            </div>

            <Modal show={add} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Новый контакт</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeTextName}
                            ref={newNameElement}
                            placeholder={"Имя"}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeSurnameText}
                            ref={newSurnameElement}
                            placeholder={"Фамилия"}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeEmailText}
                            ref={newEmailElement}
                            placeholder={"Email"}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeBirthdayText}
                            ref={newBirthdayElement}
                            placeholder={"Birthday"}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>Отмена</Button>
                    <Button variant="primary" onClick={onAddNews}>Применить</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={chenge} onHide={handleCloseChenge}>
                <Modal.Header closeButton>
                    <Modal.Title>Изменить контакт</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {chengModalBody()}
                </Modal.Body>
                <Modal.Footer>
                    {chengModalFooter()}
                </Modal.Footer>
            </Modal>

            <Modal show={deleted} onHide={handleCloseDel}>
                <Modal.Header closeButton>
                    <Modal.Title>Удаление</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {deletedModalBody()}
                </Modal.Body>
                <Modal.Footer>
                    {deletdModalFooter()}
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default Example