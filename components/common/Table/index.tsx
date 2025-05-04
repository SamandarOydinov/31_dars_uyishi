import React, { FC } from 'react'
import { TableProps } from './types'
import { TableWrapper } from './Table.styles';

const Table: FC<TableProps> = (props) => {
	const { columns = [], dataSrc = [] } = props;

	return (
		<TableWrapper>
			<table>
				<thead>
					<tr>
						{columns.map(column => (
							<th key={column.dataIndex}>{column.title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{dataSrc.map(data => (
						<tr key={data[columns[0]?.dataIndex]}>
							{columns.map(col => (
								<td key={col.dataIndex}>{data[col.dataIndex]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</TableWrapper>
	)
}

export default Table