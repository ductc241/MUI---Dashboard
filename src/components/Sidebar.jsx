import { useState } from 'react'
import {
  Drawer ,Box,
  Button, List,
  ListItem, ListItemButton, ListItemText
} from '@mui/material'

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <div className="sidebar"> 
      <Button variant="contained" onClick={handleClose}>Open</Button>

      <Drawer anchor='left' open variant='permanent' onClose={handleClose}>
        <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  )
}

export default SideBar
