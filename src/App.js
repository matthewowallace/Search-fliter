import './App.css';
import {Users} from "./user"
import {useState} from "react";

function App() {

  const [query, setQuery] = useState("");


  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("ma")));

  return (
    <div className="App">
      <input type="text" placeholder='Search...' className='search' onChange={e => setQuery(e.target.value)}/>
      <ul className='list'>
        {Users.map((user) => (
           
           <li key={user.id} className='listItem'>{user.first_name}</li>

        ))}
      </ul>
    </div>
  );
}

export default App;
