import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Avatar,
  CircularProgress,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
} from "@mui/material";

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const url ="https://randomuser.me/api/?results=50"
  useEffect(
    () => async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        const data = await res.data;
        setData((state) => data.results);
        setLoading(false);
      } catch (err) {
        console.log("Error Message: ", err.message);
      }
    },
    []
  );
  const pages = 5;
  const perPage = 10;
  const lastRecord = page * perPage;
  const firstRecord = lastRecord - perPage;
  const records = data.slice(firstRecord, lastRecord);
  
  const handleChangePage = (e) => {
    setPage(e.target.value);
  };

  return loading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : (
    <div>
      <Grid container spacing={2}>
        { records?.map((record) => {
            return (
              <Grid item xs={12} sm={4} key={record.email}>
                <Card sx={{ backgroundColor: "#eeeeee" }}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="age" alt="age">
                        {record.dob.age}
                      </Avatar>
                    }
                    title={record.location.country}
                    subheader={`${record.name.title} ${record.name.first} ${record.name.last}`}
                  />
                  <CardMedia
                    component="img"
                    image={record.picture.thumbnail}
                    height="240"
                    alt={record.name.first}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid item md={6}>
                        <pre>Username: {record.login.username}</pre>
                        <pre>Password: {record.login.password}</pre>
                        <pre>Email: {record.email}</pre>
                        <pre>Mobile: {record.phone}</pre>
                        <pre>DOB: {record.dob.date}</pre>
                        <pre>Age: {record.dob.age} years old</pre>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
      <Stack spacing={2}>
        <Typography sx={{ marginTop: "10px" }} component="div" varianat="h6">
          Page: {page} of {pages}
        </Typography>
        <div>
          <button
            onClick={() => setPage((prev) => Number(prev) - 1)}
            disabled={page <= 1 ? true : undefined}
          >
            Prev
          </button>
          {Array.from({ length: 5 }, (v, i) => i + 1).map((n) => (
            <button key={n} value={n} onClick={handleChangePage}>
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((prev) => Number(prev) + 1)}
            disabled={page >= pages ? true : undefined}
          >
            Next
          </button>
        </div>
      </Stack>
    </div>
  );
}

export default Users;
