import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import employeeArr from "../data";
import EmployeeListItem from "./EmployeeListItem";
export default function HomePage(props) {
  return (
    <div className="homepage">
      <Header title="Employee List"/>
      <SearchBar />
      <EmployeeList>
        {employeeArr.map((listItem, idx) => {
          return <EmployeeListItem {...listItem} key={idx} />;
        })}
      </EmployeeList>
    </div>
  );
}
