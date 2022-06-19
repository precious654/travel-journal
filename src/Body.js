import data from "./data";
import Section from "./Section";

let elements = data.map( (item) => <Section key={item.id} item={item} /> );


function Body() {
  return (
    <div className="body">
      {elements}
    </div>
  )
}

export default Body;
