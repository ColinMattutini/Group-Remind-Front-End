import React, { Fragment, useState } from 'react';
import { Table } from '@mantine/core';
import InputFields from './InputFields';
import SubmitButton from '../UI/SubmitButton';


const UserTable = (props) => {
    
    const [data, setData] = useState([]);
    let key = 1;

    const addUserToTable = (e) => {
        e.preventDefault();
        setData(data => [...data, {number: key, name: props.name, phonenumber: props.phonenumber, bringing: props.bringing}]);
        key++;
        console.log(data);
    }

    const rows = data.map((element) => (
        <tr key={element.number}>
          <td>{element.name}</td>
          <td>{element.phonenumber}</td>
          <td>{element.bringing}</td>
          
        </tr>
      ));
    return (
        <Fragment>
                <SubmitButton onClick={addUserToTable}>{"Add To Group"}</SubmitButton>
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
            </Fragment>

  );
}


export default UserTable;