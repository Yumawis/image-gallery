import { Box, Button, Modal, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useUploadPhotoMutation } from "../../services/photoServices";
import { useState } from "react";
import { selectUserId } from "../../store/slices/authSlice";
import { MuiFileInput } from "mui-file-input";
import { useSelector } from "react-redux";

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(3),
  gap: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const EMPTY_IMAGE = "/public/assets/empty-image.png";

const UploadPhotoModal = ({ open, handleClose }) => {
  const userId = useSelector(selectUserId);

  const [uploadPhoto, { data, error, isError, isSuccess, isLoading }] =
    useUploadPhotoMutation();

  const [file, setFile] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const handleUploadPhoto = () => {
    if (!base64Image) alert("Sube una imagen antes de cargarla");
    else uploadPhoto({ userId, base64Image });
  };

  useEffect(() => {
    if (!file) {
      setBase64Image(null);
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Result = reader.result;
      const base64Coding = base64Result.split(",")[1];
      setBase64Image(base64Coding);
    };
    reader.readAsDataURL(file);
  }, [file]);

  useEffect(() => {
    if (isSuccess) {
      alert(data?.message);

      setFile(null);
      setBase64Image(null);

      handleClose();
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) alert(error?.data?.message);
  }, [isError, error]);

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>
        <Typography variant="h6">¿Quieres subir una imagen?</Typography>
        <MuiFileInput
          value={file}
          onChange={setFile}
          accept="image/*"
          placeholder="Carga tu imagen aquí"
          disabled={isLoading}
        />
        <Box
          sx={{
            width: "100%",
            height: "250px",
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "#f2f2f2",
            boxShadow: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={
              base64Image ? `data:image/png;base64,${base64Image}` : EMPTY_IMAGE
            }
            style={{
              width: "100%",
              height: "100%",
              objectFit: base64Image ? "cover" : "contain",
              opacity: base64Image ? 1 : 0.6,
            }}
          />
        </Box>
        <Button fullWidth variant="contained" onClick={handleUploadPhoto}>
          {isLoading ? "Subiendo imagen..." : "Subir imagen"}
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default UploadPhotoModal;
