import React, { FC } from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import WaitingArea from "./WaitingArea";
import ShopArea from "./ShopArea";

// material UI
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const MainPage: FC = () => {
    return (
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <Header />
            </Grid>
            <Grid item>
                <InputArea />
            </Grid>
            <Divider flexItem />
            <Grid item>
                <WaitingArea />
            </Grid>
            <Divider flexItem />
            <Grid item>
                <ShopArea />
            </Grid>
        </Grid>
    );
};

export default MainPage;
