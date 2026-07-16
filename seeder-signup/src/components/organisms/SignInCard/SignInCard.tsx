import { useState } from "react";

import {
  Paper,
  Stack,
  Divider,
  InputAdornment,
  Box,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

import Typography from "../../atoms/Typography/Typography";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";

import InputField from "../../molecules/InputField/InputField";
import RememberSection from "../../molecules/RememberMe/RememberMe";
import SocialButton from "../../molecules/SocialLoginButton/SocialLoginButton";

function SignInCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  const handleGithubLogin = () => {
    console.log("GitHub Login");
  };

  const handleSignIn = () => {
    console.log({
      email,
      password,
      remember,
    });
  };

  return (
    <Paper
  elevation={2}
  sx={{
    width: 420,
    p: 4,
    borderRadius: 2,
    boxShadow: "0px 2px 12px rgba(0,0,0,0.06)",
  }}
>
      <Stack spacing={1.8}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: 22,
              mb: 0.5,
            }}
          >
            Sign in
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#757575",
              fontSize: 14,
            }}
          >
            Please enter your login credentials
          </Typography>
        </Box>

        <InputField
          label="Email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <Icon
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </Icon>
            </InputAdornment>
          }
        />

        <RememberSection
          checked={remember}
          onChange={(e) =>
            setRemember(e.target.checked)
          }
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleSignIn}
          sx={{
            height: 42,
            borderRadius: 1,
            textTransform: "none",
            fontWeight: 600,
            fontSize: 15,
            background:
              "linear-gradient(90deg,#5B21FF,#6D28FF)",

            "&:hover": {
              background:
                "linear-gradient(90deg,#4C1DDB,#5B21FF)",
            },
          }}
        >
          Sign in
        </Button>

        <Divider
          sx={{
            color: "#9E9E9E",
            fontSize: 13,
          }}
        >
          or
        </Divider>

        <SocialButton
          text="Sign in with Google"
          icon={<GoogleIcon sx={{ fontSize: 20 }} />}
          onClick={handleGoogleLogin}
        />

        <SocialButton
          text="Sign in with GitHub"
          icon={<GitHubIcon sx={{ fontSize: 20 }} />}
          onClick={handleGithubLogin}
        />

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#757575",
            fontSize: 14,
          }}
        >
          Don't have an account?{" "}
          <Typography
            component="span"
            color="primary"
            sx={{
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sign up
          </Typography>
        </Typography>
      </Stack>
    </Paper>
  );
}

export default SignInCard;