import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const AppHeader = ({ onUploadPhoto }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Button
        color="inherit"
        variant="contained"
        onClick={onUploadPhoto}
        sx={{ textTransform: "none" }}
      >
        Añadir Imagen
      </Button>
      <Button
        color="inherit"
        variant="contained"
        onClick={handleLogout}
        sx={{ textTransform: "none" }}
      >
        Cerrar sesión
      </Button>
    </HeaderContainer>
  );
};

export default AppHeader;
