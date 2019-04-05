import React from 'react';
import {Button, Col, Form} from "react-bootstrap";

export default class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            lastname: "",
            phone: "",
            comment: "",
            validated: false
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleCommentChange = this.handleCommentChange.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    clearState() {
        this.setState({
            id: "",
            name: "",
            lastname: "",
            phone: "",
            comment: "",
            validated: false
        })
    }

    handleSubmit(event) {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({validated: true}, () => {
            this.addContacts();
        });

    }

    fieldValidation() {
        if (this.state.name == "" || this.state.lastname == "" || this.state.phone == "") {
            return false;
        } else {
            return true;
        }
    }

    addContacts() {
        if (this.fieldValidation()) {
            this.clearState();
            this.props.setContacts(this.state);
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastname: event.target.value});
    }

    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }

    handleCommentChange(event) {
        this.setState({comment: event.target.value});
    }

    render() {
        return (
            <Form
                noValidate
                validated={this.state.validated}
            >
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue=""
                            value={this.state.name} onChange={this.handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            value={this.state.lastname}
                            onChange={this.handleLastNameChange}
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue=""
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="8" controlId="validationCustom01">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="textarea"
                            placeholder="+420 123 456 789"
                            defaultValue=""
                            value={this.state.phone}
                            onChange={this.handlePhoneChange}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="8" controlId="validationCustom01">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            type="textarea"
                            placeholder="Comment"
                            defaultValue=""
                            value={this.state.comment}
                            onChange={this.handleCommentChange}
                        />
                    </Form.Group>
                </Form.Row>
                <Button onClick={this.handleSubmit}>Add Contact</Button>
            </Form>
        )
    }
}
