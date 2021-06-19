import { Card ,Alert,CardImg , CardText,CardTitle,BreadcrumbItem,Breadcrumb, Row, Col,CardDeck,Jumbotron,Container} from 'reactstrap';

import  {useState, useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web'
import { Grid } from '@material-ui/core';
import { menuItems } from './shared/Myitems.js';
import CardJS from './CardJS.js'


function RenderMenuItem({product})
{
return (
      <CardDeck style={{display: 'flex', flexDirection: 'col'}} >
 
          <CardJS product={product}/>
 
     </CardDeck>
 

 
 
);
}




function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  
 
  

  useEffect(() => {
    alanBtn({
      top:"15px",
      left:"15px",
      key:
        "cae166fc0c628179186385ada308798d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "getMenu") {
          setProducts(commandData.data)
          console.log(commandData)
         }
         else if (commandData.command === "addToCart") {
          setCart((currentCart) => [...currentCart, commandData.data])
         }
      },
    })
}, [])

return (


 < div className="App ">
<Container>
<Row>
Cart:
    {cart.map((cartItem) => (
      <div key={cartItem.name}>
        {cartItem.name} - {cartItem.price} - {cartItem.category}
      </div>
    ))}
</Row>
<Row xs="3" >
   
    {products.map((product) => (
      
              <Col  key={product.name}  >
    
                   <RenderMenuItem  product={product} />
                   
                    
                </Col>
    ))}

</Row>

</Container>
  </div>
)



  
}

export default App;
