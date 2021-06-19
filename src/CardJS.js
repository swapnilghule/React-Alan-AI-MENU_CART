import { Card ,Alert,CardImg , CardText,CardTitle,BreadcrumbItem,Breadcrumb, Row, Col,CardDeck,Jumbotron,Container} from 'reactstrap';

import  {useState, useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web'
import { Grid } from '@material-ui/core';
import { menuItems } from './shared/Myitems.js';

export default function  CardJS({product})
{
    return (
<>


        <Card top width="100%">
        <CardImg width="100%"  src={product.src} alt={product.name} className="img-thumbnail" />
        <br />
       <CardTitle> Name : {product.name}</CardTitle>
       <CardText> Price : $ {product.price}</CardText>
       <CardText> Category : {product.category}</CardText>
   
        </Card> 

</>

    );
}