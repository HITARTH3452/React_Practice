import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [food, setFood] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [bucket, setBucket] = useState([]);

  const handleInput = (e) => {
    setFood(e.target.value); // we can make api call here but usestate take time to set food so api call begin before setfood
  };

  const fetchItems = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;

    try {
      const result = await fetch(url);

      if (result.status === 200) {
        const data = await result?.json();
        setSuggestion(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (food.length >= 2) {
      //make an api call
      fetchItems(food);
    }
  }, [food]);

  const handleShopinglist = (e) => {
    // console.log("running");
    const idx = e.target.getAttribute("data-id");

    if (idx) {
      const obj = {
        id: Date.now(),
        data: suggestion[idx],
        isDone: false,
      };
      const copyBucketList = [...bucket];
      copyBucketList.push(obj);
      setBucket(copyBucketList);
    }
    setFood("");
  };

  const handleRight = (id) => {
    const copyBuckeList = [...bucket];
    const newBucketList = copyBuckeList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBucket(newBucketList);
  };

  const handleDelete = (id) => {
    const copyBuckeList = [...bucket];
    const newList = copyBuckeList.filter((item) => item.id != id);
    setBucket(newList);
  };

  const handleActions = (e) => {
    const action = e.target.getAttribute("data-id");
    const [type, id] = action.split(":");

    if (type === "update") {
      handleRight(id);
    } else if (type === "delete") {
      handleDelete(id);
    }
  };

  return (
    <div className="app">
      <h1>My shopping list</h1>
      <input value={food} placeholder="Type item..." onChange={handleInput} />

      {food.length >= 2 ? (
        <div className="suggestion" onClick={handleShopinglist}>
          {suggestion.map((item, index) => {
            return (
              <div data-id={index} className="suggestionList" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="shopping-List" onClick={handleActions}>
        {bucket.map((item, index) => {
          return (
            <div className="shopping-item" key={index}>
              <button data-id={`update:${item.id}`}>✔️</button>
              <div className={item.isDone ? "strik" : ""}>{item.data}</div>
              <button data-id={`delete:${item.id}`}>❌</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
