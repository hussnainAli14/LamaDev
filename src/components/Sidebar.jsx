import { Box, ListItem, ListItemButton,List, ListItemText,ListItemIcon, Switch} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import Groups2Icon from '@mui/icons-material/Groups2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
<List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <Groups2Icon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <ModeNightIcon/>
              </ListItemIcon>
              <Switch onChange={(e)=> mode === 'light'?setMode('dark'):setMode('light')}/>
            </ListItemButton>
          </ListItem>
          
        </List> 
        </Box>
  )
}

export default Sidebar