import { Box, Typography } from "@mui/material";
import CardCollage from "../components/CardCollage";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useGetPhotoByUserQuery } from "../services/photoServices";
import { useEffect } from "react";

const Collage = () => {
  const location = useLocation();

  const [userId, setUserId] = useState(null);

  const { data: photos, isLoading } = useGetPhotoByUserQuery(userId, {
    skip: !userId,
  });

  useEffect(() => {
    if (location) {
      setUserId(location?.state?.id);
    }
  }, []);

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}
    >
      <Typography sx={{ textAlign: "center" }}>Galeria de Fotos</Typography>

      {isLoading ? (
        <Typography>Cargando Fotos...</Typography>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 3,
            padding: 2,
            alignItems: "stretch",
          }}
        >
          {photos?.map((photo, i) => (
            <CardCollage key={i} photo={photo} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Collage;
