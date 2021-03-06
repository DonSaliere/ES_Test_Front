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

    const onAddContact = () => {
        const addNewContact = {
            name: props.newNameText,
            surname: props.newSurnameText,
            email: props.newEmailText,
            birthday: props.newbirthdayText
        };
        const contactService = props.ContactService;
        contactService.getUpdate(addNewContact)
            .then((res) => props.addContact(res));

        handleCloseAdd();
    }

    let onUpdateContacts = () => {
        const chengeContact = {
            id: props.selectedID,
            name: props.newNameText,
            surname: props.newSurnameText,
            email: props.newEmailText,
            birthday: props.newbirthdayText
        };

        const contactService = props.ContactService;
        contactService.getUpdate(chengeContact);

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
        const contactService = props.ContactService;
        contactService.getDelete(props.selectedID);

        props.deleteContact();
        handleCloseDel();
    }

    const chengModalBody = () => {
        if (props.selectedID === null) {
            return (
                <div className={'form-group'}>
                    ???? ???? ?????????????? ??????????????!!!
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
                    ???? ???? ?????????????? ??????????????!!!
                </div>
            )
        } else {
            return (
                <div className={'form-group'}>
                    ?????????????? ???????????????
                </div>

            )
        }

    }

    const chengModalFooter = () => {
        return props.selectedID === null ?
            <>
                <Button variant="secondary" onClick={handleCloseChenge}>????????????</Button>
            </> :
            <>
                <Button variant="secondary" onClick={handleCloseChenge}>????????????</Button>
                <Button variant="primary" onClick={onUpdateContacts}>??????????????????</Button>
            </>
    }

    const deletdModalFooter = () => {
        return props.selectedID === null ?
            <>
                <Button variant="secondary" onClick={handleCloseDel}>????????????</Button>
            </> :
            <>
                <Button variant="secondary" onClick={handleCloseDel}>????????????</Button>
                <Button variant="primary" onClick={onDeleteContacts}>??????????????????</Button>
            </>
    }

    return (
        <>
            <div className={m.container}>
                <Button className={m.btn} variant="primary" onClick={handleShowAdd}>
                    ????????????????
                </Button>
                <Button className={m.btn} variant="primary" onClick={handleShowChenge}>
                    ????????????????
                </Button>
                <Button className={m.btn} variant="primary" onClick={handleShowDel}>
                    ??????????????
                </Button>
            </div>

            <Modal show={add} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>?????????? ??????????????</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeTextName}
                            ref={newNameElement}
                            placeholder={"??????"}
                        />
                    </div>
                    <div className={'form-group'}>
                        <input className={'form-control'}
                            onChange={onChangeSurnameText}
                            ref={newSurnameElement}
                            placeholder={"??????????????"}
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
                    <Button variant="secondary" onClick={handleCloseAdd}>????????????</Button>
                    <Button variant="primary" onClick={onAddContact}>??????????????????</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={chenge} onHide={handleCloseChenge}>
                <Modal.Header closeButton>
                    <Modal.Title>???????????????? ??????????????</Modal.Title>
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
                    <Modal.Title>????????????????</Modal.Title>
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