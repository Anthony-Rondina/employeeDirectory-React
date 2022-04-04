import Header from "./Header";
import { Link } from "react-router-dom"
export default function EmployeePage(props) {
    return (
        <>
            <div className="showWrapper">
                <Header back="/" title="Employee Page" />
                <div className="employeePageShow">
                    <div className="employeeNameBox">
                        <div
                            className="employeePhotoShow image-cropperShow"
                            style={{ backgroundColor: props.info.favColor }}
                        >
                            <img className="big" src={props.info.img} alt={props.info.name} />
                        </div>
                        <div className="nameSecondBox">
                            <span>{props.info.name}</span>
                            <span>{props.info.title}</span>
                        </div>
                    </div>
                    <h1>{props.info.favColor}</h1>
                </div>
            </div>
        </>
    );
}