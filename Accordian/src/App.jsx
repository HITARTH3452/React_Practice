import { useState } from "react";
import './App.css'

const items = [
  {
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "Understanding State and Props",
    content:
      "State and props are core concepts in React that allow you to create dynamic and interactive components.",
  },
  {
    title: "Component Lifecycle",
    content:
      "React components go through a lifecycle of mounting, updating, and unmounting phases.",
  },
  {
    title: "Hooks in React",
    content:
      "Hooks are functions that let you use state and other React features without writing a class.",
  },
  {
    title: "React Router",
    content:
      "React Router is a library for routing in React applications, allowing you to navigate between different components.",
  },
];

function App() {
  const [openIndeces, setOpenIndecs] = useState([]);

  const handleClick = (index) => {
    if (openIndeces.includes(index)) {
      setOpenIndecs(openIndeces.filter((id) => id !== index));
    } else {
      setOpenIndecs([...openIndeces, index]);
    }
  };
  return (
    <div className="app">
      <h1>React Accordian</h1>
      <div className="accordian">
        {items.map((item, index) => (
          <div key={index} className="accordian-item">
            <div className="accordian-header" onClick={() => handleClick(index)}>
              <h2>{item.title}</h2>
            </div>
            {openIndeces.includes(index) && (
              <div className="accordian-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
