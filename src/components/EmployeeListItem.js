import { Link } from "react-router-dom"
import { useEffect } from "react";

export default function EmployeeListItem({ officeNumber, cellNumber, email, favColor, name, img, title, getInfo }) {
  const employee = { favColor, name, img, title, officeNumber, cellNumber, email }
  return (
    <>
      <Link onClick={() => { getInfo(employee) }} to={`/:${name}`}>
        <div className="employeeCard">
          <div
            className="employeePhoto image-cropper"
            style={{ backgroundColor: favColor }}
          >
            <img src={img} alt={name} />
          </div>
          <div className="employeeInfo">
            <span className="employeeName">{name}</span>
            <span className="employeeTitle">{title}</span>
          </div>
          <div className="arrow">

            <div>Go to info</div>

          </div>
        </div>
      </Link>
    </>
  );
}
