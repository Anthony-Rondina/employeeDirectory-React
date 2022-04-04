
function Show(props) {



  return (
    <div className="homepage">
            <h1>{props.info.name}</h1>
            <h1>{props.info.title}</h1>
            <h1>{props.info.favColor}</h1>
            <h1>{props.info.img}</h1>
        </div>
  )
  }

export default Show;