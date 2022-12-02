import React from "react";
import DeleteButton from "../UI/DeleteButton";

const UserRows = (props) => {

    return(
        <tr number={props.number}>
          <td>{props.name}</td>
          <td>{props.phonenumber}</td>
          <td>{props.bringing}</td>
          <td>
            <DeleteButton onClick={() => props.deleteRow(props.number)}>{"X"}</DeleteButton>
          </td>
        </tr>
    )
}

export default UserRows;