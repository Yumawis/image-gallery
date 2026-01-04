import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/authService";
import MainContainer from "../containers/MainContainer";

const Login = () => {
  const navigate = useNavigate();

  const [login, { data, error, isSuccess, isError, isLoading }] =
    useLoginMutation();

  const handleLogin = (email) => {
    login({ email });
  };

  useEffect(() => {
    if (isSuccess) navigate("collage", { state: data });
    if (isError) alert(error?.data?.message);
  }, [data, error, isSuccess, isError]);

  return (
    <MainContainer sx={{ height: "100vh" }}>
      <Box>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => {
            const email = values.email;
            handleLogin(email);
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <Field
                  fullWidth
                  as={TextField}
                  name="email"
                  label="Email"
                  placeholder="Ingresa tu correo electrónico"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Button type="submit" disabled={isLoading} variant="contained">
                  {!isLoading ? "Iniciar sesión" : "Cargando..."}
                </Button>

                <Box sx={{ marginTop: "5px", textAlign: "center" }}>
                  <Typography variant="body2">
                    ¿No estás registrado?{" "}
                    <Link
                      component={RouterLink}
                      to={"sign-up"}
                      sx={{
                        cursor: "pointer",
                        fontWeight: 600,
                        color: "#1E88E5",
                      }}
                    >
                      {"Regístrate"}
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </MainContainer>
  );
};

export default Login;
