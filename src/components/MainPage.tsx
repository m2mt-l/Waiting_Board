import React, { ChangeEvent, FC, useState } from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import WaitingArea from "./WaitingArea";
import ShopArea from "./ShopArea";
import { InputData } from "../model/InputData";

// material UI
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const MainPage: FC = () => {
    const [inputData, setInputData] = useState<InputData>({
        customerName: "",
        numberOfPeople: 0,
        table: "",
    });
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value });
        console.log(inputData);
    };

    return (
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <Header />
            </Grid>
            <Grid item>
                <InputArea handleTextChange={handleTextChange} props={inputData} />
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
