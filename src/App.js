import React, {Component} from 'react';
import './App.css';
import ContactsTable from "./components/ContactsTable";
import ContactsForm from "./components/ContactsForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
        this.setContacts = this.setContacts.bind(this)
    }

    setContacts(contact) {
        let idContact = `${contact.name.toUpperCase()}_${contact.lastname.toUpperCase()}`;

        contact.id = idContact;

        let copy = new Array(...this.state.contacts);

        let result = copy.filter(c => {
                if (c.id.includes(idContact)) {
                    return c;
                }
            }
        );

        if (result.length >= 1) {
            let lastNumber;
            let lastID = result.pop().id;

            if (lastID.includes('-')) {
                lastNumber = parseInt(lastID.split("-").pop());
                lastNumber++;

                contact.id = `${idContact}-${lastNumber}`;
            } else {
                contact.id = `${idContact}-1`;
            }
        }

        this.setState({
            contacts: this.state.contacts.concat([contact])
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <ContactsForm setContacts={this.setContacts}/>
                    </div>
                    <div className="col-sm">
                        <ContactsTable contacts={this.state.contacts}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
