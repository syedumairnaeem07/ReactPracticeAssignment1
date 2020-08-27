import React from "react";
import "./Table.css";
function Table() {
	return (
		<div className="divfortable">
			<table className="border">
				<tr>
					<th rowspan="2" className="th1 border">
						MERN Stack
					</th>
					<th rowspan="2" className="th2 border">
						MEAN Stack
					</th>
				</tr>
				<br />
				<tr className = "border">
					<td className = "merncolor border">
						MongoDB
					</td>
					<td className = "meancolor border">
						MongoDB
					</td>
				</tr>
				<tr className = "border">
					<td className = "merncolor border">
						Express
					</td>
					<td className = "meancolor border">
						Express
					</td>
				</tr>
				<tr className = "border">
					<td className = "merncolor border">
						React
					</td>
					<td className = "meancolor border">
						Angular
					</td>
				</tr>
				<tr className = "border">
					<td className = "merncolor border">
						NodeJS
					</td>
					<td className = "meancolor border">
						NodeJS
					</td>
				</tr>
			</table>
		</div>
	);
}

export default Table;
