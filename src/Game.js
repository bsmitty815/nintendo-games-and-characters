import React, {useState} from 'react'


function Game({nintendoGameCharacters, gameTitle}) {
    const [showGameInfo, setShowGameInfo] = useState(false)

        // this is where we will create the game card with all the images of the game
        // console.log(gameTitle)
        // console.log(nintendoGameCharacters)


    function handleClick() {
        setShowGameInfo((showGameInfo) => !showGameInfo)
    }

    
    const game = nintendoGameCharacters.filter((character) => {// this filters through each character
        return character.amiiboSeries === gameTitle //this matches the character amiiboSeries to the gameTitles
    }).map((character) => {
        return <li className="flex-item" key={character.image}><img src={character.image} alt={character.name} /><p>{character.name}</p></li>
    })


    
    return (
        <div>
            <p>
                <button id={gameTitle} onClick={handleClick}>{gameTitle}</button>
            </p>
            
            <div style={showGameInfo ? {"display" : "block"} : {"display" : "none"}}>
                <ul className="flex-container">
                    {game}
                </ul>

            </div>
            
        </div>
    )

}

export default Game