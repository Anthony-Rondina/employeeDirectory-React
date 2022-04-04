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
                    <div className="innerWrapperShow">

                        <div className="showBox">
                            <div className="showInfo">
                                <p className="showTop">Call Office</p>
                                <p className="showBottom">{props.info.officeNumber}</p>
                            </div>
                            <span>&gt;</span>
                        </div>
                        <div className="showBox">
                            <div className="showInfo">
                                <p className="showTop">Call Mobile</p>
                                <p className="showBottom">{props.info.cellNumber}</p>
                            </div>
                            <span>&gt;</span>
                        </div>
                        <div className="showBox">
                            <div className="showInfo">
                                <p className="showTop">SMS</p>
                                <p className="showBottom">{props.info.cellNumber}</p>
                            </div>
                            <span>&gt;</span>
                        </div>
                        <div className="showBox">
                            <div className="showInfo">
                                <p className="showTop">Email</p>
                                <p className="showBottom">{props.info.email}</p>
                            </div>
                            <span>&gt;</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}