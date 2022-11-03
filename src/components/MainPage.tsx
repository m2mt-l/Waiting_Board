import React, { ChangeEvent, MouseEvent, FC, useState } from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import WaitingArea from "./WaitingArea";
import ShopArea from "./ShopArea";
import { InputData } from "../model/InputData";

// material UI
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { TransgenderTwoTone } from "@mui/icons-material";

const MainPage: FC = () => {
    const [inputData, setInputData] = useState<InputData>({
        customerName: "",
        numberOfPeople: 0,
        table: "",
    });

    const [waitingGuests, setWaitingGuests] = useState<InputData[]>([]);

    const [eatingGuests, setEatingGuests] = useState<InputData[]>([]);

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value });
        console.log(inputData);
    };

    const addWaitingGuests = (): void => {
        setWaitingGuests([...waitingGuests, inputData]);
        console.log(waitingGuests);
    };

    const deleteWaitingGuests = (event: MouseEvent<HTMLElement>): void => {
        const target = event.target as HTMLElement;
        console.log(target.id);
        setWaitingGuests(
            waitingGuests.filter((waitingGuest, index) => index !== parseInt(target.id)),
        );
    };

    return (
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <Header />
            </Grid>
            <Grid item>
                <InputArea
                    handleTextChange={handleTextChange}
                    addWaitingGuests={addWaitingGuests}
                    props={inputData}
                />
            </Grid>
            <Divider flexItem />
            <Grid item>
                <WaitingArea deleteWaitingGuests={deleteWaitingGuests} props={waitingGuests} />
            </Grid>
            <Divider flexItem />
            <Grid item>
                <ShopArea />
            </Grid>
        </Grid>
    );
};

export default MainPage;
