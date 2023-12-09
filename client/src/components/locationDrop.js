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
import axios from "axios";
import REQUEST_URL from "../utils/expot";


const LocationDropSelector = ({ setPolylineData }) => {
  const [open, setOpen] = useState("");
  const [locationsArr, setLocationsArr] = useState([]);
  const getLocationData = async () => {
    const locationData = await axios.get(`${REQUEST_URL}`);
    setLocationsArr(locationData.data);
    console.log(locationData.data);
  };
  const setDisplayLat = (locData) => {
    console.log(locData)
    const newLoc = [[locData.inflowLat, locData.inflowLong],[locData.outflowLat,locData.outflowLong]];
    console.log("Chal reha");
    setPolylineData(newLoc);
    // console.log(loc)
  };

  const handleDropDown = (locDetails) => {
    // console.log(locDetails)
    if (open == locDetails.name) {
      setOpen("");
    } else {
      setOpen(locDetails.name);
    }
  };

  const reviewCheckedState = (loc) => {
    return false;
  };
  useEffect(() => {
    getLocationData();
  }, []);
  return (
    <div className="locationDropSelectorWrapper">
      {/* <ScrollToBottom className="scroller"> */}
      {locationsArr.length != 0 && (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              List of Locations
            </ListSubheader>
          }
        >
          {locationsArr.map((locDetails) => {
            return (
              <div>
                <ListItemButton
                  onClick={(e) => {
                    handleDropDown(locDetails);
                  }}
                >
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={locDetails.name} />
                  {open == locDetails.name ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse
                  in={open == locDetails.name ? true : false}
                  timeout="auto"
                  unmountOnExit
                >
                  <FormGroup sx={{ pl: 7 }}>
                    {locDetails.pipes.map((loc) => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={()=>{reviewCheckedState(loc)}}
                              onClick={() => {
                                setDisplayLat(loc);
                              }}
                            />
                          }
                          label={
                            "Lat:" +
                            loc.inflowLat +
                            " Long:" +
                            loc.inflowLong
                          }
                        />
                      );
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
