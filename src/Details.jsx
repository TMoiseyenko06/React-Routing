import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

function DisplayCharacterDetails() {
    const [character,setCharacter] = useState(null);
    

  let { id } = useParams();
    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(
                    `https://gateway.marvel.com/v1/public/characters/${id}?apikey=f148ab1c2f4a6d3a3a58ff32c6e036d1&hash=478e4f1f71b7e5d250de57d2868dc39e`
                  )
                  setCharacter(response.data.data.results[0])
            } catch (err){
                console.log(err)
            }
            
        }
        fetchCharacter();
    })

  

  return (
    <div>
        
        <h2>{character ? (character.name) : ('Loading...')}</h2>
        <img src={character && character.thumbnail.path + `.${character.thumbnail.extension}`} alt="" />
        <p>{character && character.description}</p>
    </div>
  );
}

export default DisplayCharacterDetails;
