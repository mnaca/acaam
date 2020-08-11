import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormControl, FormLabel, RadioGroup, Radio } from "@material-ui/core";
import Dropzone from "./Dropzone";
import profileDefaultImageMale from "../images/profileDefaultImageMale.svg";
import profileDefaultImageFemale from "../images/profileDefaultImageFemale.svg";
import { createSetUser } from "../actions/actions";
import { useDispatch } from "react-redux";
import { auth, db } from "../firebase";

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
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [tel, setTel] = useState("+374");
  const [profileImage, setProfileImage] = useState([
    profileDefaultImageMale,
    true,
  ]);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form style={{ marginBottom: 100 }} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender *</FormLabel>
                <RadioGroup
                  style={{ display: "flex", flexDirection: "row" }}
                  aria-label="gender"
                  name="gender1"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio style={{ color: "#364f6b" }} />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio style={{ color: "#364f6b" }} />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                fullWidth
                size="small"
                value={tel}
                onChange={(e) => {
                  if (isFinite(e.target.value)) {
                    if (e.target.value.length > 12) {
                      setTel(e.target.value.slice(0, 12));
                    } else if (e.target.value.length < 4) {
                      setTel("+374");
                    } else {
                      setTel(e.target.value);
                    }
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Dropzone setValidFiles={setProfileImage} profileImage />
              <img
                width={"75%"}
                src={
                  profileImage[0] !== undefined && !profileImage[1]
                    ? URL.createObjectURL(profileImage[0])
                    : gender === "female"
                    ? profileDefaultImageFemale
                    : profileDefaultImageMale
                }
                alt=""
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: "#364f6b" }}
            onClick={() => {
              auth
                .createUserWithEmailAndPassword(email, password)
                .then((data) => {
                  alert("Success");
                  db.collection("users")
                    .doc(data.user.uid)
                    .set({
                      mail: email,
                      password,
                      firstName,
                      lastName,
                      gender,
                      tel,
                      id: data.user.uid,
                      // profileImage,
                    })
                    .then((doc) => {
                      dispatch(
                        createSetUser({
                          email,
                          password,
                          firstName,
                          lastName,
                          gender,
                          tel,
                          profileImage,
                          id: data.user.uid,
                        })
                      );
                    });
                })
                .catch((error) => {
                  alert(error);
                });
            }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
