import { lime, pink, purple,teal  } from '@mui/material/colors'
import {drawerWidth} from '../components/Layout'
export const styles={
  btn:{
    color:'#fff',
    background:'#000',
    padding:'12px 50px',
    borderRadius:'20px',

    '&:hover':{
      background:'#fff',
      color:'#000',

    }
  },

  field:{
    marginTop:20,
    marginBottom:20
  },

  page:{
    backgroundColor:"#f9f9f9",
    padding:'40px 0px',
    width:'100%',
    height:'100vh',
    paddingTop:'80px'
   
  },
  root:{
    display:'flex',
    // justifyContent:'space-between'
  },
  active:{
    backgroundColor:'#f9f9f9'
  },
  appbar:{
    width:`calc(100% - ${drawerWidth}px)`
  },
  avatar:(item)=>{
   if(item == 'remainder'){
    return pink[500]
   }
   if(item == 'work'){
    return purple[500]
   }
   if(item == 'money'){
    return teal[500]
   }

   return lime[500]
   
  }
}