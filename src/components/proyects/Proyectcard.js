import React from 'react'

function Proyectcard(props) {
    const [proyectData, setProyectData] = React.useState({
        title: "",
        description: "",
        url:"",
        image:"",
        techs:[],
    })

    React.useEffect(() => {
        setProyectData(
            title= props.title,
            description= props.description,
            url= props.url,
            
        )
    })
  return (
    <div>
        <a href={props.url}><img src={props.image} alt="" /></a>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
    </div>
  )
}

export default Proyectcard