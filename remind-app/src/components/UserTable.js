import React from 'react';
import { Table } from '@mantine/core';
    const data = [
        {number: 1, name: "Name Holder", phonenumber: "888-888-8888", bringing: "bringing test"},
        {number: 2, name: "Second", phonenumber: "111-111-1111", bringing: "bringing test 2"}
    ]

const UserTable = () => {
    
    const rows = data.map((element) => (
        <tr key={element.number}>
          <td>{element.name}</td>
          <td>{element.phonenumber}</td>
          <td>{element.bringing}</td>
          
        </tr>
      ));

  return (
        <Table horizontalSpacing="xs" fontSize="lg" highlightOnHover withBorder>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Bringing</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>

  );
}


export default UserTable;