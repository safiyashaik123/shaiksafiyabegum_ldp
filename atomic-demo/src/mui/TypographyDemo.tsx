import Typography from "@mui/material/Typography";

function TypographyDemo() {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        color="primary"
        gutterBottom
      >
        Student Profile
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        Student Information Portal
      </Typography>

      <Typography
        variant="h6"
        color="secondary"
        gutterBottom
      >
        Personal Information
      </Typography>

      <Typography variant="body1">
        Name : Safiya Shaik
      </Typography>

      <Typography variant="body1">
        Department : Artificial Intelligence & Data Science
      </Typography>

      <Typography variant="body1">
        Email : safiya@gmail.com
      </Typography>

      <Typography
        variant="body1"
        color="success.main"
        gutterBottom
      >
        Status : Active
      </Typography>

      <Typography
  variant="body2"
  component="p"
>
  This profile contains the academic information
  of the student enrolled in the institution.
</Typography>

      <Typography
        variant="caption"
        color="text.secondary"
        noWrap
      >
        Last Updated : Today
      </Typography>
    </>
  );
}

export default TypographyDemo;