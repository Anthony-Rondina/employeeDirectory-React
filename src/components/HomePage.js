import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import employeeArr from "../data";
import EmployeeListItem from "./EmployeeListItem";
// import {Link} from "react-router-dom"
export default function HomePage(props) {
  return (
    <div className="homepage">
      <Header title="Employee List" />
      <SearchBar />
      <EmployeeList >
        {employeeArr.map((listItem, idx) => {
          return <EmployeeListItem getInfo = {props.getInfo}{...listItem} key={idx} />;
        })}
      </EmployeeList>
    </div>
  );
}
