import React from "react";
import { styles } from "../styles/Styles";
import { Drawer, Typography, AppBar, Toolbar } from "@mui/material";
import {useNavigate , useLocation} from 'react-router-dom'
import {format} from 'date-fns'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteIcon from "@mui/icons-material/Note";
export const drawerWidth = 240;

const Layout = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const menuItems = [
    {
      text: "My Notes",
      icon: <NoteIcon />,
      path: "/",
    },
    {
      text: "Add Note",
      icon: <NoteAddIcon />,
      path: "/create",
    },
  ];
  return (
    <div style={styles.root}>
    <AppBar 
    color='grey'
    elevation={0}
      style={styles.appbar}
    >
      <Toolbar>
        <Typography variant='h5'
        component='h3'
        sx={{ flexGrow: 1 }}
        >
        {format (new Date(), 'do MMMM Y')}
        </Typography>
        <Typography variant='h6'
        
        >
        User
        </Typography>
      </Toolbar>
    </AppBar>

      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <div>
          <Typography variant="h5">
           Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item, index) => (
           
            <ListItem key={index} disablePadding onClick={()=>navigate(`${item.path}`)} style={location.pathname ===   item.path ? styles.active : null}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
         
          ))}
        </List>
      </Drawer>
      <div style={styles.page}>{children}</div>
    </div>
  );
};

export default Layout;
