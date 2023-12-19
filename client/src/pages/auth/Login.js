import React from "react";
import { Stack, Typography, Link,Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/AuthSocial";
import LoginForm from "../../sections/LoginForm";
import { Outlet } from "react-router-dom";




const Login = () => {
  return (
    <>
     <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack
            sx={{ width: "100%" }}
            direction={"column"}
            alignItems={"center"}
          >
            {/* <img style={{ height: 120, width: 120 }} src={Logo} /> */}
          </Stack>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Login to Glific</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2"> New user ?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create an Account
          </Link>
        </Stack>
        {/*Login Form*/}
     <LoginForm/>
        {/*Auth Social*/}
        <AuthSocial/>
      </Stack>
        </Stack>

        <Outlet />
      </Container>
    </>
  );
};

export default Login;