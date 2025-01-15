import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";

const ListComponent = ({ items, onItemClick }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.id}
          button
          onClick={() => onItemClick(item)}
          sx={{ alignItems: "flex-start" }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            primary={
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {item.text}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Instructor: {item.teacher}
                </Typography>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

ListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      teacher: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ListComponent;
