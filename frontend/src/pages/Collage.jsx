import { Box, Typography } from "@mui/material";
import CardCollage from "../components/cards/CardCollage";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useGetPhotoByUserQuery } from "../services/photoServices";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserId } from "../store/slices/authSlice";

const Collage = () => {
  const userId = useSelector(selectUserId);

  const { data: photos, isLoading } = useGetPhotoByUserQuery(userId, {
    skip: !userId,
  });

  const photosCount = photos?.length ?? 0;

  const gridTemplateColumns =
    photosCount < 2
      ? "repeat(1, 350px)"
      : "repeat(auto-fill, minmax(350px, 1fr))";

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }}>
        GALERÍA DE FOTOS
      </Typography>

      {isLoading ? (
        <Typography>Cargando Fotos...</Typography>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns,
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
