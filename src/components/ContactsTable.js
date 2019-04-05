import React from 'react';

export default class ContactsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    renderContacts() {
        const listItems = this.props.contacts.map((c, index) =>
            <tr key={index}>
                <th scope="row">{c.id}</th>
                <td>{c.name} {c.lastname}</td>
                <td>{c.phone}</td>
                <td>{c.comment}</td>
            </tr>
        );
        return (
            <tbody>
            {listItems}
            </tbody>
        );
    }


    render() {
        return (
            <div className="table-wrapper-scroll-y my-custom-scrollbar">

                <table className="table table-bordered table-striped mb-0">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name Lastname</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Comment</th>
                    </tr>
                    </thead>

                    {this.renderContacts()}
                </table>
            </div>
        );
    }
}
