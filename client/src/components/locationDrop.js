import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
//Importing local json-data :
import Locations from '../data/network_1_locations.json'

const tmpMap = new Map();
tmpMap['hostel_O'] = 'Hostel O';
tmpMap['hostel_D'] = 'Hostel D';
tmpMap['hostel_C'] = 'Hostel C';
tmpMap['hostel_B'] = 'Hostel B';
tmpMap['hostel_A'] = 'Hostel A';
tmpMap['hostel_J'] = 'Hostel J';
tmpMap['hostel_H'] = 'Hostel H';
tmpMap['hostel_Q'] = 'Hostel Q';
tmpMap['hostel_K'] = 'Hostel K';
tmpMap['hostel_I'] = 'Hostel I';
tmpMap['hostel_M'] = 'Hostel M';
tmpMap['hostel_PG'] = 'Hostel PG';
tmpMap['library'] = 'Library';
tmpMap['pool'] = 'Pool';
tmpMap['cos_complex'] = 'COS Complex';
tmpMap['synthetic_running_track'] = 'Synthetic Running Track';
tmpMap['reservoir_1'] = 'Reservior 1';
tmpMap['reservoir_2'] = 'Reservior 2';
tmpMap['admin_block'] = 'Admin Block';
tmpMap['D_block'] = 'Block D';
tmpMap['F_block'] = 'Block F';
tmpMap['E_block'] = 'Block E';
tmpMap['G_block'] = 'Block G';
tmpMap['junction_1'] = 'Junction 1';
tmpMap['junction_2'] = 'Junction 2';
tmpMap['junction_3'] = 'Junction 3';
tmpMap['junction_4'] = 'Junction 4';
tmpMap['junction_5'] = 'Junction 5';
tmpMap['junction_6'] = 'Junction 6';


const LocationDropSelector = ({ fetchMapData }) => {
  const [open, setOpen] = useState("");
  const [locationsArr, setLocationsArr] = useState([]);
  const [pipesData,setPipesData] = useState([]);

  const getLocationData = async () => {
    //Setting the initial Locations with Co-Ordinates Data from local json
    console.log('Locations Data is :',Locations.locations);
    setLocationsArr(Locations.locations);

    //Setting the initial Pipes Data from DB
    var headers = new Headers();
     headers.append('Content-Type','application/json');
     headers.append('Accept','application/json');

     const data = await fetch('http://localhost:4000/pipeline/getCurrentPipelines',{
      method:'GET',
      redirect:'follow',
      credentials:'include',
      headers:headers
     })

     const res = await data.json();
    setPipesData(res.allPipelines);
  };
  
  const setDisplayLat = async(locData) => {
    console.log(locData)
    console.log("Adding new pipe-junction data",locData);

    //Adding this pipeline to selected ones in db
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     headers.append('Accept','application/json');

     const data = await fetch('http://localhost:4000/pipeline/selectPipeline',{
      method:'POST',
      redirect:'follow',
      credentials:'include',
      headers:headers,
      body:JSON.stringify({pipeLineObject:locData})
     })

     const res = await data.json();
     console.log('Data from backend is :',res);

     //Then refetch it
     getLocationData();
     //refetch Map Data
     fetchMapData();
  };

  const handleDropDown = (locDetails) => {
    // console.log(locDetails)
    if (open == locDetails.location) {
      setOpen("");
    } else {
      setOpen(locDetails.location);
    }
  };

  useEffect(() => {
    getLocationData();
  }, []);
  return (
    <div className="locationDropSelectorWrapper">
      {locationsArr.length != 0 && (
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              List of Locations
            </ListSubheader>
          }
        className="locationListContianer">
          {locationsArr.map((locDetails) => {
            return (
              <div>
                <ListItemButton
                  onClick={() => {
                    handleDropDown(locDetails);
                  }}
                >
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={locDetails.name} />
                  {open == locDetails.location ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse
                  in={open == locDetails.location ? true : false}
                  timeout="auto"
                  unmountOnExit
                >

                  <FormGroup sx={{pl:7}}>

                    {pipesData.map((item)=>{
                      if(item.start_node_name == locDetails.location || item.end_node_name == locDetails.location){
                        return (
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={item.selected == false ? false : true}
                                onClick={() => {
                                  setDisplayLat(item);
                                }}
                              />
                            }
                            label={
                              <div>
                                <Typography variant="body1">
                                  Start-Node: {tmpMap[item.start_node_name]}
                                </Typography>
                                <Typography variant="body1">
                                  End-Node: {tmpMap[item.end_node_name]}
                                </Typography>
                              </div>
                            }
                          />
                        )
                      }
                      
                    })}
                  </FormGroup>
                </Collapse>
              </div>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default LocationDropSelector;
