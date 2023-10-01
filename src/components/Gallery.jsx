import MyContext from "../MyContex";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const {data}=useContext(MyContext);
  


  return (
    <div className="gallery grid-columns-5 p-3 g-3">
      {data.map((foto, i) => (
              <Card key={i}  className="text-white card">
                <Card.Img src={foto.src.tiny} />
                <Card.ImgOverlay className="d-flex flex-column" >
                  <div className="d-flex justify-content-end mb-auto ">
                  <Card.Text className="text-end">
                    <IconHeart indice={i}/>
                  </Card.Text>
                  </div>
                  <div className="d-flex flex-column justify-content-end align-center">
                    <Card.Title>{foto.photographer}</Card.Title>
                    <Card.Text>{foto.alt}</Card.Text>
                  </div>
                  
                </Card.ImgOverlay>
              </Card>
          ))}
    </div>
  )
};
export default Gallery;
