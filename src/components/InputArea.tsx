import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const InputArea: FC = () => {
    return (
        <Stack
            direction={"row"}
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            autoComplete="off"
            justifyContent="center"
            alignItems="center"
        >
            <TextField required label="お名前" />
            <TextField
                label="人数"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{ max: 5, min: 0 }}
            />
            <TextField select value=""></TextField>
            <Button variant="contained" sx={{ m: 1, width: "20ch", minWidth: "20ch" }} size="large">
                順番待ちをする
            </Button>
        </Stack>
    );
};

export default InputArea;
