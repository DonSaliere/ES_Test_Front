import React, { Component } from 'react';
import MaterialTable from 'material-table';

class Table extends Component {

	componentDidMount() {
		const contactService = this.props.ContactService;
		contactService.getContact()
			.then((res) => this.props.loadedContact(res));
	};


	render() {
		let now = new Date().toISOString().slice(0, 10);
		let DayMonth = now.slice(8, 10) + '.' + now.slice(5, 7)

		const selected = (idTabl, id, name, desc, email, birthday) => {
			this.props.updateContactId(id, idTabl);
			this.props.updateContactNameText(name);
			this.props.updateContactSurnameText(desc);
			this.props.updateContactEmailText(email);
			this.props.updateContactBirthdayText(birthday);
		};

		const columns = [
			{ title: 'Name', field: 'name' },
			{ title: 'Surname', field: 'surname' },
			{ title: 'Email', field: 'email' },
			{ title: 'Birthday', field: 'birthday' }
		]
		return (<div>
			<MaterialTable title=""
				data={this.props.contacts}
				columns={columns}
				onRowClick={((evt, selectedRow) => selected(selectedRow.tableData.id, selectedRow.id, selectedRow.name, selectedRow.surname, selectedRow.email, selectedRow.birthday))}
				options={{
					rowStyle: rowData => ({
						backgroundColor: (this.props.selectedIDRowData === rowData.tableData.id) ? '#dfd9d9' : (DayMonth === rowData.birthday.slice(0, 5)) ? 'rgba(231, 27, 27, 0.301)' : '#FFF',
					})
				}}
			/>
		</div>)
	}
}

export default Table

