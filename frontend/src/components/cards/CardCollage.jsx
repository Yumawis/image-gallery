import { Box } from "@mui/material";

const CardCollage = ({ photo }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "10px",
        backgroundColor: "#ffffff",
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "250px",
          borderRadius: 2,
          overflow: "hidden",
          backgroundColor: "#f2f2f2",
          boxShadow: 3,
        }}
      >
        <img
          src={`data:image/png;base64,${photo?.base64Image}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default CardCollage;
