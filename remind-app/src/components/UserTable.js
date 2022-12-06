import React, { Fragment, useState } from 'react';
import { Table } from '@mantine/core';
import SubmitButton from '../UI/SubmitButton';
import UserRows from './UserRows';

const UserTable = (props) => {
    
    const [data, setData] = useState([]);
    const [key, setKey] = useState(0);;

    const addUserToTable = () => {
        if(props.name !== '' && props.phonenumber !== '' && props.bringing !== '' && props.phonenumber.length === 10){
            setData(data => [...data, {number: key, name: props.name, phonenumber: props.phonenumber, bringing: props.bringing}]);
            setKey(key + 1);
            props.resetInputFields();
            
        }
    }

     const deleteRow = (number) => {
        setData(data.filter(el => el.number !== number))
     }

    const rows = data.map((element) => (
        <UserRows 
            key={element.number}
            number={element.number}
            name={element.name}
            phonenumber={element.phonenumber}
            bringing={element.bringing}
            deleteRow={deleteRow}
        />
      ));


    const fetchSubmitGroup = async () => {
        await fetch(
            'http://localhost:8080/sendSMS',
            {
                method:"GET",
                body: JSON.stringify({
                    data: data
                }),
                headers: {
                    'Content-Type': 'application/json'
                }

            }
        )
    }

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
                    <tbody>
                        {rows}
                        
                    </tbody>
                </Table>
                <button>Submit Group</button>
            </Fragment>

  );
}


export default UserTable;
