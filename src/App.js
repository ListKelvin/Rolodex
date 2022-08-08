// import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };

  }

  componentDidMount(){
   
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((user)=> this.setState(()=>{
        return {monsters: user}
    }
    ))
  }
   handleOnChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField};
    })
  }

  render(){

    const {monsters, searchField}=this.state
    const {handleOnChange} = this
    const searchMonster = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    
    return (
      <>
      <div className="App">
        <h1 className='app-tittle'> Car Rolodex</h1>
        <SearchBox onChangeHandler={handleOnChange} placeholder="Search-cat" classname="cat-search-box"/>
        <CardList monsters={searchMonster}/>

        </div>
      </>
    );
  } 
}
export default App;
