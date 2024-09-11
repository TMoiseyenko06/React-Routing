import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);
  const [offSet, setOffSet] = useState(0);
  const [selected,setSelected] = useState(null);

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
    setSelected(null);
  };

  const loadPrev = () => {
    if (offSet !== 0) {
      setOffSet(offSet - 5);
      setSelected(null)
    }
  };

  return (
    <div>
      <div className="cont">
        {characters ? (
          characters.data.results.map((character) => (
            <div key={character.id} onClick={() => setSelected(character)}>
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
        {selected && (
          <div>
            <h2>{selected.name}</h2>
            <img src={selected.thumbnail.path + `.${selected.thumbnail.extension}`} alt="" />
            <p>{selected.description}</p>
          </div>
        )}
    </div>
  );
}

export default App;
