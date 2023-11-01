import React, { ReactNode, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {
  getPublicWalletAddress,
  isUserConnected,
} from "@/externalServices/Freighter";

export const Home = () => {
  const [walletConnectionNotification, setWalletConnectionNotification] =
    useState<ReactNode>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const handleWalletConnection = async () => {
    const userHasWalletInstalled = await isUserConnected();

    if (!userHasWalletInstalled) {
      setWalletConnectionNotification(
        <Alert
          severity="error"
          sx={{
            justifyContent: "center",
          }}
        >
          You need to install a wallet to use this app.
        </Alert>
      );
    }

    const userPublicKey = await getPublicWalletAddress();

    if (userPublicKey) {
      setIsButtonDisabled(true);
      setWalletConnectionNotification(
        <>
          <Alert
            severity="success"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              component="div"
              variant="body1"
              sx={{
                textAlign: "start",
              }}
            >
              You have successfully connected to your wallet! Your address is:
            </Typography>
            <Typography
              gutterBottom
              component="div"
              variant="body1"
              sx={{
                textAlign: "start",
              }}
            >
              {userPublicKey}
            </Typography>
          </Alert>
        </>
      );
    }
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid
        item
        sx={{
          width: "auto",
          textAlign: "center",
        }}
        xs={12}
      >
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome to the PaltaLabs frontend challenge Q4
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: "auto",
        }}
      >
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            textAlign: "center",
            backgroundColor: "#1A2027",
          }}
        >
          <Grid container>
            {!isButtonDisabled && (
              <Grid item xs={12}>
                <Button variant="contained" onClick={handleWalletConnection}>
                  Connect to Freighter
                </Button>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              sm
              container
              sx={{
                marginTop: 2,
              }}
            >
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  {walletConnectionNotification}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
