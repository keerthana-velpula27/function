import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            background: "linear-gradient(to right, #ECE9E6, #FBD3E9)",
            color: "black",
            height: "50px",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: "1",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "800",
            }}
          >
            We extend our most sincere invitation for you to be a part of this joyous occasion.!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
