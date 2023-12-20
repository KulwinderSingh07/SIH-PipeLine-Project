import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocationOnIcon from "@mui/icons-material/LocationOn";





const AnoamlitySelector = ({ anomalityDataArr,setCenterMap }) => {

  return (
    <div className="locationDropSelectorWrapper">
      {anomalityDataArr.length != 0 && (
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              List of Anomalities
            </ListSubheader>
          }
        className="locationListContianer">
          {anomalityDataArr.map((anomality) => {
            return (
              <div>
                <ListItemButton
                  onClick={() => {
                    console.log(anomality)
                  let newCenter=[anomality.anomalityLocLat,anomality.anomalityLocLong]
                    setCenterMap(newCenter);
                  }}
                >
                  <ListItemIcon>
                    <LocationOnIcon/>
                  </ListItemIcon>
                  <ListItemText primary={anomality.anomalityType} />
                </ListItemButton>
              </div>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default AnoamlitySelector;
