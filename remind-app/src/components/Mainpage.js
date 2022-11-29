import UserTable from "./UserTable";
import classes from "./Mainpage.module.css";

const Mainpage = () => {

    return(
        <div className={classes.center}>
            <UserTable />
        </div>
    )
}

export default Mainpage;