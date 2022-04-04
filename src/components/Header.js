import {Link} from "react-router-dom"
export default function Header(props) {
    return (
      <header>
        {props.back ? <Link id="floatBackButton" to={`/`}>&lt;</Link> : ''}
        <h3 className="headerTitle">{props.title}</h3>
      </header>
    );
  }
  