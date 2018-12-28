import React, { Component } from 'react';

import { makeData } from '../Utils';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class SellersList extends Component {
	constructor() {
		super();
		this.state = {
			data: makeData()
		};
	}

	render() {
		return (
			<div>
				<h2>Sellers List</h2>

				<ReactTable
					data={this.state.data}
					columns={[
						{
							Header: 'Name',
							accessor: d => d.firstName + ' ' + d.lastName,
							id: 'Name'
						},
						{
							Header: 'Status',
							accessor: 'status'
						}
					]}
					defaultPageSize={10}
					className="-striped -highlight"
				/>
			</div>
		);
	}
}

export default SellersList;
