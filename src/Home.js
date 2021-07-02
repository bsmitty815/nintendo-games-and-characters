import React from 'react'

function Home({nintendoGameCharacters}) {
    //this will be the home page showing all the games

    const displayCharacters = () => {
        const charactersInfo = [...nintendoGameCharacters]
        return charactersInfo.map((character) => {
            return <ul className="flex-container" key={character.image}><li className="flex-item"><img src={character.image} alt={character.name} className="character-pictures"/><p>{character.name}</p></li></ul>
        })
    }
            
    return (
        <div>
            <h1>Nintendo Characters</h1>
            <div className="flex-container" >
                {displayCharacters()}

            </div>

            
        </div>
    )

}

export default Home