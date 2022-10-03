import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:'none' , sm:'block'}}}>
      <Typography fontWeight={100}>
        Online Friends
      </Typography>
      <AvatarGroup total={24} sx={{justifyContent:'start'}}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{color:'Green'}} />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{color:'Blue'}} />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" sx={{color:'coral'}}/>
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"sx={{color:'purple'}} />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"sx={{color:'primary'}} />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{color:'primary'}}/>
</AvatarGroup>
    </Box>
  )
}

export default Rightbar