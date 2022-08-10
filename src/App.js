// import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () =>{
  const [searchField,setSearchField] = useState('')
  const [monsters, setMonsters]= useState([])
  const [searchMonster,setSearchMonster] = useState(monsters);

  console.log('rendered');
  useEffect(()=>{
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((user)=> setMonsters(user)
    )
  },[])

  useEffect(()=>{
    const newSearchMonster = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
      });
      setSearchMonster(newSearchMonster)
     
  },[monsters,searchField])
 
  const handleOnChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return(
    <div className="App">
    <h1 className='app-tittle'> Cat Rolodex</h1>
    <SearchBox onChangeHandler={handleOnChange} placeholder="Search-cat" classname="cat-search-box"/>
    <CardList monsters={searchMonster}/>

    </div>
  )
}

export default App;
