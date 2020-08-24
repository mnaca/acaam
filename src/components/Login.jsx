import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { auth, db } from "../firebase";
import { connect, useDispatch } from "react-redux";
import { createSetUser } from "../actions/actions";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
}));

function Login() {
  const classes = useStyles();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <Container style={{ marginBottom: 100 }} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form style={{ marginBottom: 100 }} className={classes.form} noValidate>
          <TextField
            inputProps={{ className: "sign" }}
            className="sign"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <TextField
            inputProps={{ className: "sign" }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            style={{ backgroundColor: "#364f6b", color: "white" }}
            fullWidth
            variant="outlined"
            className={classes.submit}
            onClick={() => {
              auth
                .signInWithEmailAndPassword(mail, password)
                .then((data) => {
                  alert("Success");
                  db.collection("users")
                    .doc(data.user.uid)
                    .get()
                    .then((doc) => {
                      dispatch(createSetUser(doc.data()));
                    });
                })
                .catch((error) => {
                  alert(error);
                });
            }}
          >
            Sign In
          </Button>
          <Grid container style={{ marginTop: 15 }}>
            <Grid item style={{ marginLeft: "auto" }}>
              <Link to="/register" variant="body2">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default connect()(Login);
