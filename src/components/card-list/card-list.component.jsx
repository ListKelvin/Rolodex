
import './card-list.styles.component.css'
import Card from "../card/card.component";


const CardList=({monsters})=>(
    <div className="card-list">
        {
             monsters.map((monster,index)=>{
                
                return (
                    <Card key={index} monster={monster}/>
                )
              })
            }
    </div>
    )


export default CardList;