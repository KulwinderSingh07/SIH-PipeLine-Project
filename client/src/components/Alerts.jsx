import React from 'react'
import Header from './header'
import Alert from '@mui/material/Alert';
import { AlertTitle, Stack, Typography, Divider, Box, IconButton } from '@mui/material';
import { CircleDashed, } from "phosphor-react";

const alerts = [
    {
        alertId: 101,
        supervisorId: "AJ101",
        timeStance: "11:34"
    },
    {
        alertId: 102,
        supervisorId: "PC102",
        timeStance: "03:24"
    },
    {
        alertId: 103,
        supervisorId: "BM103",
        timeStance: "10:14"
    },
    {
        alertId: 104,
        supervisorId: "VI104",
        timeStance: "1:34"
    },
]

const Alerts = ({ el }) => {
    return (
        <>
               <Box mb="10px">
    <Typography
      variant="h3"
      color="black"
      fontWeight="bold"
      sx={{ m: "0 0 4px 0" }}
    >
    Alerts
    </Typography>
    <Typography variant="h6" color="Black">
   Provide with time to time alerts
    </Typography>
  </Box>
            <Divider width={"20%"}/>
            <Stack direction="row" spacing={3}>

                
                <Box sx={{
                    position: "relative",
                    width: "50%"

                }}>
                    <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
                        <Stack
                            direction="row"
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Typography variant="h4">Warnings</Typography>
                        </Stack>
                        <Divider width={"20%"} />
                        <Typography variant='h5'> Water Theft Alerts</Typography>
                        <Stack direction="column">
                            {alerts.map((el) => (
                                <Alert key={el.alertId} severity="error" sx={{ mb: 5, borderRadius: '15px' }}>
                                    <AlertTitle>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                            spacing={6}
                                        >
                                            <Typography variant='body1'> Alert-Id {el.alertId} </Typography>
                                            <Typography>Supervisor-Id {el.supervisorId}</Typography>
                                            <Typography> Time-Instance{el.timeStance}</Typography>

                                        </Stack>
                                    </AlertTitle>
                                    This is an Theft alert — <strong>check it out!</strong>
                                </Alert>

                            ))}
                        </Stack>


                    </Stack>

                </Box>

                <Box sx={{
                    position: "relative",

                }}>
                    <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
                        <Stack
                            direction="row"
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Typography variant="h4">Emergency</Typography>
                        </Stack>
                        <Divider width={"35%"} />
                        <Typography variant='h5'>Various Water Anomalies</Typography>
                        <Stack direction="column">
                            {alerts.map((el) => (
                                <Alert key={el.alertId} severity="warning" sx={{ mb: 5, borderRadius: '15px' }}>
                                    <AlertTitle>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                            spacing={6}
                                        >
                                            <Typography variant='body1'> Alert-Id {el.alertId} </Typography>
                                            <Typography>Supervisor-Id {el.supervisorId}</Typography>
                                            <Typography> Time-Instance{el.timeStance}</Typography>

                                        </Stack>
                                    </AlertTitle>
                                    This is an Emergency alert — <strong>check it out!</strong>
                                </Alert>

                            ))}
                        </Stack>


                    </Stack>

                </Box>
            </Stack>










            {/* <Stack></Stack> 
            <Typography
                variant="h3"
                color="black"
                fontWeight="bold"
            >Alerts

            </Typography>
            <Typography variant="h6" color="Black" sx={{mb:"10px"}}>
                Providing you with time to time alerts
            </Typography>
            <Divider sx={{ width: '20%' }} />
            <Typography variant="h5"
                color="black"
                fontWeight="light"
                sx={{ m: "10 0 4px 0" }}>Theft Alerts
            </Typography>
            <Stack direction="column">
                {alerts.map((el) => (
                    <Alert key={el.alertId} severity="error" sx={{ mb: 5, borderRadius: '15px' }}>
                        <AlertTitle>
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={1}
                            >
                                <Typography variant='body1'>Theft alert with an Alert-Id {el.alertId}</Typography>
                                <Typography>with your notable Supervisor-Id{el.supervisorId}</Typography>
                                <Typography>{el.timeStance}</Typography>

                            </Stack>
                        </AlertTitle>
                        This is a Theft alert — <strong>check it out!</strong>
                    </Alert>

                ))}
            </Stack>
            <Typography variant="h5"
                color="black"
                fontWeight="light"
                sx={{ m: "4px 0 4px 0" }}>Water Alerts
            </Typography>
            <Stack>
                {alerts.map((el) => (
                    <Alert key={el.alertId} severity="warning" sx={{ mb: 5, borderRadius: '15px' }}>
                        <AlertTitle>
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={10}
                            >
                                <Typography variant='body1'>Theft alert with an Alert-Id {el.alertId}</Typography>
                                <Typography>{el.supervisorId}</Typography>

                            </Stack>
                        </AlertTitle>
                        This is a Theft alert — <strong>check it out!</strong>
                    </Alert>

                ))}
            </Stack>*/}


        </>
    )
}

export default Alerts
