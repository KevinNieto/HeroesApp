import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'


export const HeroList = ({publisher}) => {
    const heroes =useMemo(()=>  getHeroeByPublisher(publisher),  [publisher])
    return (
    <div className='row g-3 animate__animated animate__bounce'>
      
            {
                heroes.map(heroe =>(
                    <HeroCard key={heroe.id}
                      {...heroe}
                    />))
            }


    </div>
  )
}
