import React, { useMemo } from 'react'
import {useParams, Navigate, useNavigate} from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages.js'
import {getHeroById} from '../../selectors/getHeroById.js'

export const HeroeScreen = () => {
  const {heroeId} = useParams()
  const hero =useMemo(()=>  getHeroById(heroeId), [heroeId])
  
  
  
  const navigate = useNavigate()
  if(!hero) {
    return <Navigate to='/'/>
  }

  const handleReturn =()=>{
    navigate(-1)
     
  }
  //const imagePath = `/assets/${hero.id}.jpg`;


  return (
    <div className="row mt-5">
        <div className="col-4">
          <img 
            src={heroImages(`./${hero.id}.jpg`)}
            className='img-thumbnail animate__animated animate__fadeInLeft'
            alt={hero.superhero}
          /> 
        </div>
        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego: </b>{hero.alter_ego}</li>
            <li className="list-group-item"> <b>Publisher: </b>{hero.publisher}</li>
            <li className="list-group-item"> <b>First Appareance: </b>{hero.first_appearance}</li>
            <li className="list-group-item"> <b>Alter ego: </b>{hero.alter_ego}</li>
          </ul>

          <h5>Characters</h5>
          <p>{hero.characters}</p>


          <button
            className="btn btn-outline-info"
            onClick ={handleReturn}
          >
            Regresar
          </button>
        </div>
    </div>
  )
}