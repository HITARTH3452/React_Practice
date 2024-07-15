import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [Food, setFood] = useState("");
  const [Suggestion, setSuggestion] = useState([]);
  const [Bucket, setBucket] = useState([]);

  const handleInput = (e) => {
    setFood(e.target.value);
  };

  const fetchItems = async (Food) => {
    const url = `https://api.frontendeval.com/fake/food/${Food}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("data from api ->" + data);
        setSuggestion(data);
        console.log("data in suggestion box ->"+ Suggestion);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (Food.length > 2) {
      fetchItems(Food);
    }
  }, [Food]);

  const addToBucket = (item) => {
    setBucket([
      ...Bucket,
      {
        id: Date.now(),
        data: item,
        isDone: false
      }
    ]);
    console.log(Bucket);
    setFood("");
    setSuggestion([]);
  };

  const itemDone = (id) => {
    setBucket(
      Bucket.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item))
    );
  };

  const itemDelete = (id) => {
    setBucket(Bucket.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1>My Shopping list</h1>
      <input value={Food} placeholder="Type item..." onChange={handleInput} />

    
      {Food.length > 2 && (
        <div className="suggestion">
          {Suggestion.map((item, index) => (
            <div
              key={index}
              className="suggestionList"
              onClick={() => addToBucket(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
     

      <div className="shopping-List">
        {Bucket.map((item) => {
          <div className="shopping-item" key={item.id}>
            <button onClick={itemDone(item.id)}>✔️</button>
            <div className={item.isDone ?"srike" : ""}>{item.data}</div>
            <button onClick={itemDelete(item.id)}>❌</button>
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
