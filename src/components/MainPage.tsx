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

    const [servingGuests, setServingGuests] = useState<InputData[]>([]);

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value });
        console.log(inputData);
    };

    const addWaitingGuests = (): void => {
        setWaitingGuests([...waitingGuests, inputData]);
    };

    const deleteWaitingGuests = (event: MouseEvent<HTMLElement>): void => {
        const target = event.target as HTMLElement;
        const targetIndex = parseInt(target.id);
        // console.log(target.id);
        setWaitingGuests(waitingGuests.filter((waitingGuest, index) => index !== targetIndex));
    };

    const addServingGuests = (event: MouseEvent<HTMLElement>): void => {
        const target = event.target as HTMLElement;
        const targetIndex = parseInt(target.id);
        const targetGuest = Object.assign(waitingGuests[targetIndex]);
        setServingGuests([...servingGuests, targetGuest]);
        deleteWaitingGuests(event);
    };

    const deleteServingGuests = (event: MouseEvent<HTMLElement>): void => {
        const target = event.target as HTMLElement;
        const targetIndex = parseInt(target.id);
        // console.log(target.id);
        setServingGuests(servingGuests.filter((servingGuest, index) => index !== targetIndex));
        console.log(servingGuests);
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
                <WaitingArea
                    deleteWaitingGuests={deleteWaitingGuests}
                    addServingGuests={addServingGuests}
                    props={waitingGuests}
                />
            </Grid>
            <Divider flexItem />
            <Grid item>
                <ShopArea deleteServingGuests={deleteServingGuests} props={servingGuests} />
            </Grid>
        </Grid>
    );
};

export default MainPage;
