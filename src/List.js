
import React, { useState } from 'react'
import data from './data';
// import Getup from './Adding';

const List =({people})=>{

    return (
        <>
            {people.map((person)=>{
                const {id,name,age,image}=person;

                return (
                    <article key={id} className="person">
                        <img src={image} alt={name} />
                        <div>
                            <h3>{name}</h3>
                            <p>{age} years old</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default List;

