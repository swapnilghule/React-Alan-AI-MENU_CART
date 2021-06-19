import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Card , CardImg  , CardText,CardTitle} from 'reactstrap';






const ModalExample1 = ({product}) => {
 

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
const ModalDist = () => {
    for (var i = 0; i < product.length; i++) {
       <Card top width="100%">
        <CardImg width="100%"  src={product.src} alt={product.name} className="img-thumbnail" />
        <br />
       <CardTitle> Name : {product.name}</CardTitle>
       <CardText> Price : $ {product.price}</CardText>
       <CardText> Category : {product.category}</CardText>
   
        </Card> 
      }
  
  }

  return (
    <div>
      <Button color="info" onClick={toggle}> More Details <i class="fa fa-eye" aria-hidden="true"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} charCode="Back">{product.name}</ModalHeader>
        <ModalBody>
           <ModalDist />
        </ModalBody>
        <ModalFooter>
           
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample1;