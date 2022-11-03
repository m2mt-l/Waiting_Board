import React, { FC } from "react";
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

const ShopArea: FC<{
    props: InputData[];
}> = ({ props }) => {
    const propsServingGuests = props;
    const renderServingGuests = propsServingGuests.map((servingGuest, index) => (
        <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="center">{servingGuest.customerName}</TableCell>
            <TableCell align="center">{servingGuest.numberOfPeople}</TableCell>
            <TableCell align="center">{servingGuest.table}</TableCell>
            <TableCell align="center">
                <Button id={index.toString()} sx={{ width: 150 }} variant="outlined">
                    お会計（退店）
                </Button>
            </TableCell>
        </TableRow>
    ));

    return (
        <Box>
            <Typography variant="h5" my={1} component="div">
                店内
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>名前</TableCell>
                            <TableCell align="right">人数</TableCell>
                            <TableCell align="right">席</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{renderServingGuests}</TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ShopArea;
