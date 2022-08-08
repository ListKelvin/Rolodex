import { Component } from "react";
import './card-list.styles.component.css'
import Card from "../card/card.component";
class CardList extends Component{

    render(){
        const {monsters}=this.props;
        return (<>
            <div className="card-list">
        {
             monsters.map((monster,index)=>{
                
                return (
                    <Card key={index} monster={monster}/>
                )
              })
            }
            </div>
        </>)
    }
}

export default CardList;