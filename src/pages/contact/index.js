import React from "react";
import { navigate } from "gatsby-link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../../components/Layout";
import { background } from "../../utils/background";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background
  },
  form: {
    width: "100%" // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  title: {
    marginBottom: 12,
    color: "#fff"
  }
}));

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Index() {
  const [formValue, setForm] = React.useState({});
  const classes = useStyles();

  const handleChange = e => {
    setForm({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formValue
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <section className="section">
        <Grid
          container
          component="main"
          className={classes.root}
          justify="center"
        >
          <Grid item xs={12} sm={8} md={5}>
            <Typography className={classes.title} component="h1" variant="h3">
              Contact Me
            </Typography>
            <Paper className={classes.paper}>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className={classes.form}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </div>
                <TextField
                  name="name"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="name"
                  autoComplete="name"
                  value={formValue.name || ""}
                  onChange={handleChange}
                />
                <TextField
                  name="email"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  value={formValue.email || ""}
                  onChange={handleChange}
                />
                <TextField
                  name="message"
                  variant="outlined"
                  fullWidth
                  label="Message"
                  multiline
                  rowsMax="6"
                  rows="4"
                  value={formValue.message || ""}
                  onChange={handleChange}
                  className={classes.textField}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  size="large"
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
}
