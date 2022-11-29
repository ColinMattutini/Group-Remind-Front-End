import UserTable from "./UserTable";
import classes from "./Mainpage.module.css";
import InputFields from "./InputFields";

const Mainpage = () => {

    return(
        <div className={classes.formatter}>
            <div className={classes.center}>
                <InputFields />
                <UserTable />
            </div>
        </div>
    )
}

export default Mainpage;