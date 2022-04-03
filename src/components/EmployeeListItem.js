export default function EmployeeListItem({ favColor, name, img, title }) {
    return (
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
      </div>
    );
  }
  