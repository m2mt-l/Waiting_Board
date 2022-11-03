import React, { MouseEvent, FC } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { InputData } from "../model/InputData";

const WaitingArea: FC<{
    deleteWaitingGuests: (event: MouseEvent<HTMLElement>) => void;
    addServingGuests: (event: MouseEvent<HTMLElement>) => void;
    props: InputData[];
}> = ({ deleteWaitingGuests, addServingGuests, props }) => {
    const propsWaitingGuests = props;
    const renderWaitingGuests = propsWaitingGuests.map((waitingGuest, index) => (
        <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={{ width: 150 }} align="center">
                {waitingGuest.customerName}
            </TableCell>
            <TableCell sx={{ width: 150 }} align="center">
                {waitingGuest.numberOfPeople}
            </TableCell>
            <TableCell sx={{ width: 150 }} align="center">
                {waitingGuest.table}
            </TableCell>
            <TableCell sx={{ width: 150 }} align="center">
                <Button
                    id={index.toString()}
                    sx={{ width: 150 }}
                    variant="outlined"
                    onClick={deleteWaitingGuests}
                >
                    取り消し
                </Button>
            </TableCell>
            <TableCell sx={{ width: 150 }} align="center">
                <Button
                    id={index.toString()}
                    sx={{ width: 100 }}
                    variant="outlined"
                    onClick={addServingGuests}
                >
                    案内
                </Button>
            </TableCell>
        </TableRow>
    ));

    return (
        <Box>
            <Typography variant="h5" my={1} component="div">
                順番待ち
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: 150 }} align="center">
                                名前
                            </TableCell>
                            <TableCell sx={{ width: 150 }} align="center">
                                人数
                            </TableCell>
                            <TableCell sx={{ width: 150 }} align="center">
                                席
                            </TableCell>
                            <TableCell sx={{ width: 150 }} align="center"></TableCell>
                            <TableCell sx={{ width: 150 }} align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{renderWaitingGuests}</TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default WaitingArea;
