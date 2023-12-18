import React from "react";
import { Stack, Typography, Link,Container } from "@mui/material";
import { Link as RouterLink,Outlet } from "react-router-dom";
import AuthRegisterForm from "../../sections/RegisterForm";
import AuthSocial from "../../sections/AuthSocial";

const Register = () => {
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
        <Typography variant="h4">Get Started with Glific</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">Already have an account ?</Typography>
          <Link component={RouterLink} to="/auth/login" variant="subtitle2">
            Sign Up
          </Link>
        </Stack>

        {/* Register Form*/}
        <AuthRegisterForm/>
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By signing up, i agree to "}
          <Link underline="always" color="text.primary">
            Terms of Sevice
          </Link>
          {' and '}
          <Link underline="always" color="text.primary">
            Privacy Policy
          </Link>
        </Typography>
        <AuthSocial/>
      </Stack>
        </Stack>

        <Outlet />
      </Container>
    </>
  );
};

export default Register;
