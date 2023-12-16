import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const SelectedAreaStateToggle = ({setSelectedArea,selectedArea}) => {
    const changeSelectedArea=(direction)=>{
        let index=selectedArea.map(area=>area.selected).indexOf(true)
        if(index==-1){
            selectedArea[0].selected=true
            setSelectedArea(selectedArea)
            return
        }
        console.log(index)
        let length=selectedArea.length
        let sortedArr
        if(direction=="left"){
                selectedArea[index].selected=false
                selectedArea[length-1].selected=true;
                sortedArr = [selectedArea[length-1], ...selectedArea.filter(option => option!=selectedArea[length-1])];
        }else{
                selectedArea[index].selected=false
                let currentSelectedArea=selectedArea[index+1]
                let changeVal={...currentSelectedArea,selected:true}
                sortedArr = [changeVal, ...selectedArea.filter(option => option!=currentSelectedArea && option!=selectedArea[index]),selectedArea[index]];
            }
            setSelectedArea(sortedArr);
    }
    return ( 
        <>
         <IconButton onClick={()=>{changeSelectedArea("left")}}><ArrowBackIosIcon/></IconButton>
         <IconButton onClick={()=>{changeSelectedArea("right")}}><ArrowForwardIosIcon/></IconButton>
        </>
     );
}
 
export default SelectedAreaStateToggle;