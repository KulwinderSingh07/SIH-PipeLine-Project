import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//ICONS IMPORT
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';

//Importing CSS
import '../CSS/HomePage.css'

//Importing Assets
import PersonImage from '../assets/randperson.png';
import HomePageComponent from '../components/HomePageComponent';
import AreaDashBoardPage from '../components/areaDashBoard';
import Calendar from '../components/CalendarPage';
const drawerWidth = 300;

//color for doctor sidebar header
const textColor = {
    color: "black",
    fontSize:30,
    fontWeight:700
};

//ListItem Button CSS
const ListItemButtonCss = {
        bgcolor: "inherit",
        color: "inherit",
        ":hover": {
          bgcolor: "inherit",
          transition: "none", // Remove or adjust the transition
          willChange: "background, color", // Add willChange property
          background: "transparent", // Set background to transparent on hover
        },
        ":focus": {
          bgcolor: "inherit",
          outline: "none", // Remove focus border
        },
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleButtonClick = (text) =>{
    // console.log(text);
    setHeaderText(text);
    setParam(text);
  }

  const drawer = (
    <div className='drawerMain'>
        <div className='adminDiv'>
        <Toolbar sx={{p:2}}>
            <WaterDamageIcon sx={{fontSize:'30px',color:textColor}}/><ListItemText primaryTypographyProps={{ style: {color:textColor,fontWeight:'500',fontSize:30} }} primary={"ADMIN"}/>
        </Toolbar>
        </div>

      <div className='personImageDiv'>
        <img className='personImage' src={PersonImage}/>
        <p className='personText'>Simardeep</p>
      </div>

      <Divider />
      <List>
        {['Dashboard', 'Manage Areas', 'Calendar','Alerts'].map((text, index) => (
          <ListItem sx={{p:1.5 , color:textColor,
            ":hover": {
            bgcolor: "#F8F8F8",
            color: "black",
            cursor:"pointer",
            transition:"none",
            willChange: "background, color"
          }}} key={text} disablePadding>
            <ListItemButton onClick={()=>{handleButtonClick(text)}} sx={ListItemButtonCss}>
              <ListItemIcon sx={{ml:"1.2vw"}}>
                {index === 0 ? <HomeIcon sx={{color:'black'}}/>:<></>}
                {index === 1 ? <LocationOnIcon sx={{color:'black'}}/>:<></>}
                {index === 2 ? <CalendarMonthIcon sx={{color:'black'}}/>:<></>}
                {index === 3 ? <ShareLocationIcon sx={{color:'black'}}/>:<></>}
                {index === 4 ? <SdCardAlertIcon sx={{color:'black'}}/>:<></>}
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontSize: '18px'}} sx={{pt:'2px'}} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  //my States start here, above is material UI code
  const [headerText,setHeaderText] = React.useState('Dashboard');
  const [param,setParam] = React.useState('Dashboard');

    const renderSwitch=(param)=>{
    switch(param) {
        case 'Dashboard':
            return <HomePageComponent/>
        case 'Manage Areas':
            return <AreaDashBoardPage/>
        case 'Calendar':
            return <Calendar/>
        case 'Appointments':
            // return <Appointments/>
        case 'Emergency':
            // return <Emergency/>
        case 'Logout':
            // return <Logout/>
        default:
            // return <Dashboard/>
    }
  }

    //Default Page Render of Dashboard using useEffect
    React.useEffect(()=>{
        setHeaderText('Dashboard');
        if(headerText==='Dashboard'){

        }
    },[])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, background:'white',boxShadow:'none',color:'black'
        }}
      >
      
      <div className='headSection'>
        <h2>{headerText} Section</h2>
      </div>
      </AppBar> */}

      {/*This  Box below has Drawer/SideBar*/}
      <Box
        component="nav"
        sx={{height:"100%", width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{minHeight:'100vh',bgcolor:'#eaf2fb', flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> This is a dummy toolbar just for gapping */}
        
        {/*Render the content here below  depending upon the selected sidebar option*/}
          
          {renderSwitch(param)}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
