import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import logo from "../assets/one.jpg";

const MyComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card
          sx={{
            maxWidth: 500,
            marginTop: "13px",
            marginTop: "100px",
            marginLeft: "100px",
            background: " linear-gradient(to right, #FFFFFF, #6DD5FA)",
            borderRadius: "23px",
            height: 500,
          }}
        >
          <CardContent>
            <Typography variant="h6" color="text.primary">
              You are cordially invited to join us in celebrating the half-saree
              function of our beloved child, GYANADA. Your presence would mean
              the world to us, and we warmly welcome you to share in this
              special occasion. We look forward to your blessings and the joy of
              your company. It promises to be a memorable day filled with love,
              traditions, and cherished moments. We sincerely hope you can grace
              us with your presence on this significant day!
            </Typography>
            <br></br> <br></br>
            <Typography
              color="text.primary"
              sx={{ fontWeight: 800, fontSize: "20px" }}
            >
              Details: DATE & DAY: 26th November,2023, Sunday. VENUE: Hotel
              Daspalla (The Forum)
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card
          style={{ width: "700px", marginTop: "13px", borderRadius: "20px" }}
        >
          <CardContent>
            <CardMedia component="img" height="780" image={logo} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MyComponent;
