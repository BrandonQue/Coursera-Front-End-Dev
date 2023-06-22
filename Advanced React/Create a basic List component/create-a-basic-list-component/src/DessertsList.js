
function DessertsList(props) {
    // Implement the component here.
    return (
        <ul>
            {props.data
            .filter(dessert => {
                return dessert.calories < 500
            })
            .sort((a, b) => {
                return a.calories - b.calories
            })
            .map(dessert => {
                const itemText = `${dessert.name} - ${dessert.calories} cal`;
                return <li>{itemText}</li>
            })}
        </ul>
    );
  }
  
  export default DessertsList;
  