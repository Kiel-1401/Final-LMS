// components/atoms/CardBase.jsx
import React from "react";
import { Card, CardContent, Typography, Box, ButtonBase } from "@mui/material";
import PropTypes from "prop-types";

const CardBase = ({ title, description, children, onClick, sx }) => {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{ width: "100%", textAlign: "left", borderRadius: "8px" }}
    >
      <Card sx={{ width: "100%", ...sx }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Box mt={2}>{children}</Box>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

CardBase.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

CardBase.defaultProps = {
  description: "",
  children: null,
  onClick: () => {},
  sx: {},
};

export default CardBase;
