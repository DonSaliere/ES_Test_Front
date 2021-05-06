import React from 'react';
import MaterialTable from 'material-table';


export const Table = (props) => {

	let now = new Date().toISOString().slice(0, 10);
	let DayMonth = now.slice(8, 10) + '.' + now.slice(5, 7)

	const selected = (idTabl, id, name, desc, email, birthday) => {
		props.updateContactId(id, idTabl);
		props.updateContactNameText(name);
		props.updateContactSurnameText(desc);
		props.updateContactEmailText(email);
		props.updateContactBirthdayText(birthday);
	};

	const columns = [
		{ title: 'Name', field: 'name' },
		{ title: 'Surname', field: 'surname' },
		{ title: 'Email', field: 'email' },
		{ title: 'Birthday', field: 'birthday' }
	]

	return (<div>
		<MaterialTable title=""
			data={props.contacts}
			columns={columns}
			onRowClick={((evt, selectedRow) => selected(selectedRow.tableData.id, selectedRow.id, selectedRow.name, selectedRow.surname, selectedRow.email, selectedRow.birthday))}
			options={{
				rowStyle: rowData => ({
					backgroundColor: (props.selectedIDRowData === rowData.tableData.id) ? '#dfd9d9' : (DayMonth === rowData.birthday.slice(0, 5)) ? 'rgba(231, 27, 27, 0.301)' : '#FFF',
				})
			}}
		/>
	</div>)
}