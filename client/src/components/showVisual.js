import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const TitlebarBelowMasonryImageList=()=> {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default TitlebarBelowMasonryImageList
const itemData = [
  {
    img: '../assets/childNode.png',
    title: 'Child Node',
  },
  {
    img: '../assets/junction.png',
    title: 'Junction Node',
  },
  {
    img: '../assets/anomalityicon.png',
    title: 'Anomality',
  }
]