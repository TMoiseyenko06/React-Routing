import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function DisplayCharacters() {
    const [characters, setCharacters] = useState(null);
    const [offSet, setOffSet] = useState(0);
    const navigate = useNavigate();
    
  
    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const response = await axios.get(
            `https://gateway.marvel.com/v1/public/characters?limit=5&offset=${offSet}ts=1&apikey=f148ab1c2f4a6d3a3a58ff32c6e036d1&hash=478e4f1f71b7e5d250de57d2868dc39e`
          );
          setCharacters(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCharacters();
    }, [offSet]);
  
    const loadNext = () => {
      setOffSet(offSet + 5);
    };
  
    const loadPrev = () => {
      if (offSet !== 0) {
        setOffSet(offSet - 5);
      }
    };


  
    return (
      <div>
        <div className="cont">
          {characters ? (
            characters.data.results.map((character) => (
              <div key={character.id} onClick={() => navigate(`/character/${character.id}`)}>
                <img
                  src={
                    character.thumbnail.path + `.${character.thumbnail.extension}`
                  }
                  alt=""
                />
                <h3>{character.name}</h3>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div>
          <button onClick={() => loadPrev()}>Previous</button>
          <button onClick={() => loadNext()}>Next</button>
        </div>
      </div>
    );
  }

export default DisplayCharacters;