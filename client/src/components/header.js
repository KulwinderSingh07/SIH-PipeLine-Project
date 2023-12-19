import React from 'react'
import { Typography, Box,  } from "@mui/material";

const Header = ({title,subtitle}) => {
  return (
    <Box mb="30px">
    <Typography
      variant="h3"
      color="black"
      fontWeight="bold"
      sx={{ m: "0 0 4px 0" }}
    >
      {title}
    </Typography>
    <Typography variant="h6" color="Black">
    {subtitle}
    </Typography>
  </Box>
  )
}

export default Header
