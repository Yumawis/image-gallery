import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";

import AppHeader from "../common/AppHeader";
import UploadPhotoModal from "../modals/UploadPhotoModal";

const MainLayout = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <AppHeader onUploadPhoto={handleOpenModal} />

      <Box p={3}>
        <Outlet />
      </Box>

      <UploadPhotoModal open={modalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default MainLayout;
