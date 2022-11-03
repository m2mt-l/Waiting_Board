import React, { ChangeEvent, FC, useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { table } from "../data/table";
import { InputData } from "../model/InputData";

const InputArea: FC<{
    handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    addWaitingGuests: () => void;
    props: InputData;
}> = ({ handleTextChange, addWaitingGuests, props }) => {
    const defaultString = "";
    const propsInputData = props;

    const isInvalidInputData = (): boolean => {
        return (
            propsInputData.customerName === "" ||
            propsInputData.numberOfPeople === 0 ||
            propsInputData.table === ""
        );
    };

    return (
        <Stack
            direction={"row"}
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 2, width: "25ch" },
            }}
            autoComplete="off"
            justifyContent="center"
            alignItems="center"
        >
            <TextField
                required
                label="名前"
                size="small"
                name="customerName"
                onChange={handleTextChange}
            />
            <TextField
                label="人数"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{ max: 5, min: 1 }}
                size="small"
                name="numberOfPeople"
                onChange={handleTextChange}
            />
            <TextField
                select
                size="small"
                name="table"
                onChange={handleTextChange}
                defaultValue={defaultString}
            >
                {table.map((choice) => (
                    <MenuItem key={choice} value={choice}>
                        {choice}
                    </MenuItem>
                ))}
            </TextField>
            {isInvalidInputData() ? (
                <Button
                    disabled
                    variant="contained"
                    sx={{ m: 1, width: "20ch", minWidth: "20ch" }}
                    size="large"
                >
                    順番待ちをする
                </Button>
            ) : (
                <Button
                    variant="contained"
                    sx={{ m: 1, width: "20ch", minWidth: "20ch" }}
                    size="large"
                    onClick={addWaitingGuests}
                >
                    順番待ちをする
                </Button>
            )}
        </Stack>
    );
};

export default InputArea;
