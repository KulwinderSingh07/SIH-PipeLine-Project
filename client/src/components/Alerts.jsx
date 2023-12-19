import React from 'react'
import Header from './header'
import Alert from '@mui/material/Alert';
import { AlertTitle, Stack, Typography, Divider } from '@mui/material';

const alerts = [
    {
        alertId: 101,
        supervisorId: "AJ101"
    },
    {
        alertId: 102,
        supervisorId: "PC102"
    },
    {
        alertId: 103,
        supervisorId: "BM103"
    },
    {
        alertId: 104,
        supervisorId: "VI104"
    },
]

const Alerts = ({ el }) => {
    return (
        <>
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
                                spacing={0.4}
                            >
                                <Typography variant='body1'>Theft alert with an Alert-Id {el.alertId}</Typography>
                                <Typography>with your notable Supervisor-Id{el.supervisorId}</Typography>

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
            </Stack>


        </>
    )
}

export default Alerts
