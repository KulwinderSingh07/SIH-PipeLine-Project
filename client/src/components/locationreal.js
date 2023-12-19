import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios"


const LocationDrop = ({ fetchMapData }) => {
  const [open, setOpen] = useState("");
  const [locationsArr, setLocationsArr] = useState([]);
  const [pipesData,setPipesData] = useState([]);

  let nameMap = new Map();
  nameMap["hostel_D"] = "Hostel D";
  nameMap["hostel_O"] = "Hostel O";
  nameMap["hostel_C"] = "Hostel C";
  nameMap["hostel_B"] = "Hostel B";
  nameMap["hostel_M"] = "Hostel M";
  nameMap["hostel_A"] = "Hostel A";
  nameMap["hostel_H"] = "Hostel H";
  nameMap["hostel_PG"] = "Hostel PG";
  nameMap["hostel_Q"] = "Hostel Q";
  nameMap["hostel_J"] = "Hostel J";
  nameMap["hostel_k"] = "Hostel K";
  nameMap["hostel_l"] = "Hostel L";
  nameMap["junction_3"] = "Junction 3";
  nameMap["junction_5"] = "Junction 5";
  nameMap["junction_4"] = "Junction 4";
  nameMap["junction_6"] = "Junction 6";
  nameMap["junction_1"] = "Junction 1";
  nameMap["junction_2"] = "Junction 2";
  nameMap["synthetic_running_track"] = "Synthetic Running Track";
  nameMap["cos_complex"] = "Cos Complex";
  nameMap["pool"] = "Pool";
  nameMap["library"] = "Library";
  nameMap["D_block"] = "D Block";
  nameMap["F_block"] = "F Block";
  nameMap["E_block"] = "E Block";
  nameMap["G_block"] = "G Block";
  nameMap["admin_block"] = "Admin Block";

  const getLocationData = async () => {
    //Setting the initial Locations with Co-Ordinates Data from local json
    const JunctionArr=await axios.get("http://localhost:4000/junction/getAllJunctions")
    // console.log(JunctionArr.data)
    // console.log('Locations Data is :',Locations.locations);
    setLocationsArr(JunctionArr.data);

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
     console.log(res)
    setPipesData(res.allPipelines);
  };
  
  const updateSelectedPipes = async(locData) => {
    console.log(locData)
    // console.log("Adding new pipe-junction data",locData);

    //Adding this pipeline to selected ones in db
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     headers.append('Accept','application/json');

     const data = await axios.post('http://localhost:4000/pipeline/selectPipeline',{junctionName:locData})

    
     console.log('Data from backend is :',data);

     //Then refetch it
     getLocationData();
     //refetch Map Data
     fetchMapData();
  };

  const handleDropDown = (locDetails) => {
    // console.log(locDetails)
    if (open == locDetails.junctionName) {
      setOpen("");
    } else {
      setOpen(locDetails.junctionName);
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
                style={{display:"flex"}}
                onClick={() => {
                    handleDropDown(locDetails);
                }}
                >
                    <FormControlLabel
                    value="top"
                    control={<Checkbox 
                        checked={locDetails.selected==true?true:false}
                        onClick={()=>{
                          console.log(locDetails)
                          locDetails.selected=!locDetails.selected
                          updateSelectedPipes(locDetails.junctionName)
                      }}
                    />}
                    />

                <ListItemText primary={locDetails.junctionName} />
                {open == locDetails.junctionName ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                in={open == locDetails.junctionName ? true : false}
                timeout="auto"
                unmountOnExit
                >
                <FormGroup sx={{pl:9}}>
                    {pipesData.map((item)=>{
                    if(item.junction_name == locDetails.junctionName){
                        return (
                        <Typography>{item.end_node_name}</Typography>
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


export default LocationDrop;
