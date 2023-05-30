import React from 'react'
import './style.css'
import Card from './card/Card'
//

import Box from "@mui/material/Box";
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";


export default function Category({productsArr, title}) {
    
  
    return (
      <Container className="content__container">
        <Typography variant="h4">{title}</Typography>
        <Box className="card__box">
          {productsArr.map((el) => (
            <Card product={el} key={el.id} />
          ))}
        </Box>
      </Container>
    );
}
