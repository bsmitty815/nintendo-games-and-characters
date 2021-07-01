import React  from 'react'
import Game from "./Game"
import { Route } from "react-router-dom"

function GameTitle({nintendoGameCharacters}) {
    


    const displayTitle = () => {

        const charactersInfo = [...nintendoGameCharacters]
        const multipleNamesOnlyArray = []
        
        for (let i = 0; i < charactersInfo.length; i++) {
            //loop through charactersInfo and only take out the amiiboSeries elements
            multipleNamesOnlyArray.push(charactersInfo[i].amiiboSeries)
        }
        const namesOnlyArray = [...new Set(multipleNamesOnlyArray)]
        
        //Set method in javascript The Set object lets you store unique values of any type, whether primitive values or object references.
        //..new set(array) makes a new array without the duplicates in the original array
        namesOnlyArray.sort()//sorting the array by alphabertical order
        
        const gameTitleButton = namesOnlyArray.map((title) => {
            return <Game  key={title} nintendoGameCharacters={nintendoGameCharacters} gameTitle={title}/>
        })

        return gameTitleButton
    }



    return (
        <div>
            <h1>Nintendo Games</h1>
            <Route >
                {displayTitle()}
            </Route>
        </div>
    )

}

export default GameTitle