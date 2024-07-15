import "./App.css";

const programs = [
  {
    name: "SQL",
    Year: 1970,
    Creator: "Donald D. Chamberlin, Raymond F. Boyce",
    UseCase: "Database management",
  },
  {
    name: "C",
    Year: 1972,
    Creator: "Dennis Ritchie",
    UseCase: " System programming, embedded systems",
  },
  {
    name: "C++",
    Year: 1983,
    Creator: "Bjarne Stroustrup",
    UseCase: "Game development, system software",
  },
  {
    name: "PERL",
    Year: 1987,
    Creator: "Larry Wall",
    UseCase: "Scripting, web development, automation",
  },
  {
    name: "HTML",
    Year: 1991,
    Creator: "Tim Berners-Lee",
    UseCase: "Web content structure",
  },
  {
    name: "PYTHON",
    Year: 1991,
    Creator: "Guido van Rossum",
    UseCase: "Web development, data analysis, AI",
  },
  {
    name: "JAVA",
    Year: 1995,
    Creator: "James Gosling",
    UseCase: "Enterprise software, Android apps",
  },
  {
    name: "JAVASCRIPT",
    Year: 1995,
    Creator: "Brendan Eich",
    UseCase: "Web development, browser scripting",
  },
  {
    name: "PHP",
    Year: 1995,
    Creator: "Rasmus Lerdorf",
    UseCase: "Web development, server-side scripting",
  },
  {
    name: "CSS",
    Year: 1996,
    Creator: "Håkon Wium Lie, Bert Bos",
    UseCase: "Web page styling"
  },
  {
    name: "C#",
    Year: 2000,
    Creator: " Microsoft",
    UseCase: "Windows apps, game development",
  },
  {
    name: "Scala",
    Year: 2003,
    Creator: "Donald D. Chamberlin, Raymond F. BoyceMartin Odersky",
    UseCase: "Web applications, data analysis",
  },
];


function App() {
  return (
    <>
      <h1>Programming Multiverse</h1>
      <div className="box">
      {programs.map((item , index) => (
        <div key={index} className="container">
        <h1 className="heading">{item.name}</h1>
        <h2>{item.Year}</h2>
        <p>{item.Creator}</p>
        <p>{item.UseCase}</p>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;
