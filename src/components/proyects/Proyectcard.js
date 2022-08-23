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
        return setProyectData({
            title: props.title,
            description: props.description,
            url: props.url,
            image: props.image,
            techs: props.techs
        })
    }, [])

    const techlist = proyectData.techs.map((tech) => <li className='tech-item' key={tech}>{tech}</li> );

  return (
    <div className='card-container'>
        <div className="image-container">
            <a href={proyectData.url} target="_blank" rel="noreferrer"><img className='card-image' src={proyectData.image} alt={proyectData.title} /></a>
        </div>
        <div className='card-text-container'>
            <h3 className='card-title'>{proyectData.title}</h3>
            <h4 className='card-info'>{proyectData.description}</h4>
        </div>
        <div className='tech-list'>
            {techlist}
        </div>
    </div>
  )
}

export default Proyectcard