import React, { useEffect, useState } from "react";
import { Container, SpeedDial,  } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";
import {useNavigate} from 'react-router-dom'
const Notes = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setData(data));

    setLoad(true);
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    });

    const updatedItem = data.filter((item) => item.id != id);
    setData(updatedItem);
  };





  // const handleEdit = async (id) => {
  //   await fetch(`http://localhost:8000/notes/${id}`, {
  //     method: "POST",
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify({
  //       "title":,
  //       "details",
  //       "category",

  //     })
  //   });

  //   const updatedItem = data.filter((item) => item.id != id);
  //   setData(updatedItem);
  // };






  const breakPoints={
    default: 3,
    1100 : 2,
    700 :  1
  }

  if(!isLoad){
   return  (
    <h1>Loading ...</h1>
   )
  }
  return (
    <Container  >
       <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<AddIcon onClick={()=>navigate('/create')}/>}
      >

      </SpeedDial>
      {isLoad && (
        <Masonry
          breakpointCols={breakPoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data?.map((item) => (
            <div key={item.id}>
              <NoteCard note={item} handleDelete={handleDelete} />
            </div>
          )) 
        }
        </Masonry>
      )}
    </Container>
  );
};

export default Notes;
