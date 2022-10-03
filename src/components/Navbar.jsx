import { AppBar,  Toolbar, Typography,styled,InputBase, Badge,Box, Avatar } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
const Search = styled('div')(({theme})=>({
  backgroundColor:'white',
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:'30%'
}));     

const Icons = styled(Box)(({theme})=>({
  backgroundColor:'primary',
  display:'flex',
  alignItems:'center',
  gap:'20px',
  [theme.breakpoints.down('sm')]:{
    display:'none'
  }
}));

const SmallIcons = styled(Box)(({theme})=>({
  backgroundColor:'primary',
  display:'none',
  
  [theme.breakpoints.down('sm')]:{
    display:'flex',
    alignItems:'center',
  gap:'10px',
  }
}));
const Navbar = () => {
  
  return (
    <AppBar sx={{position:'sticky'}} >
      <Toolbar sx={{ display:'flex', justifyContent:'space-between'}}>
        <Typography sx={{display:{xs:'none' , sm:'block'}}}>
        LAMA DEV
        </Typography>
       
       <PetsIcon sx={{display : {xs:'block', sm:'none'}}}/>
       
       <Search><InputBase placeholder='Search'/></Search>
       <Icons>
       <Badge badgeContent={4} color="error">
  <MailIcon/>
  
</Badge>
<Badge badgeContent={4} color="error">
  <NotificationsIcon/>
</Badge>
<Avatar alt="Remy Sharp" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.in%2Fphotos%2Fislamabad&psig=AOvVaw2WxlrDncNyxRFdibYtSgMu&ust=1664800736816000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDS4ZXIwfoCFQAAAAAdAAAAABAE" sx={{width:'30px', height:'30px'}}/>
</Icons>
<SmallIcons>
<Avatar alt="Remy Sharp" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.in%2Fphotos%2Fislamabad&psig=AOvVaw2WxlrDncNyxRFdibYtSgMu&ust=1664800736816000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDS4ZXIwfoCFQAAAAAdAAAAABAE" sx={{width:'30px', height:'30px'}}/>
<Typography>
  RAJA G
</Typography>
</SmallIcons>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar