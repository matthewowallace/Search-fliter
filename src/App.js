import './App.css';
import {Users} from "./user"
import {useState} from "react";
import { Table } from './Table';

function App() {

  const [query, setQuery] = useState("");

  const keys = ["firstname", "lastname", "email"]

  
  const Search = (data) => {
    return data.filter((item) =>
        keys.some(key=>item[key].toLowerCase().includes(query))
      );
  };


  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("ma")));

  return (
    <div className="App">
      <input type="text" placeholder='Search...' className='search' onChange={e => setQuery(e.target.value)}/>
        <Table data={Search(Users)}/>
    </div>
  );
}

export default App;
