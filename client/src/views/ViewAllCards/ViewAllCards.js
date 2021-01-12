import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const rows = [
  { id: 1, before: "your", after: "twój" },
  { id: 2, before: "old", after: "stary" },
  { id: 3, before: "drunk", after: "pijany" },
  { id: 4, before: "apple", after: "jabłko" },
  { id: 5, before: "cod", after: "dorsz" },
  { id: 6, before: "tobacco", after: "tytoń" },
  { id: 7, before: "diced", after: "pokrojony w kostkę" },
  { id: 8, before: "whole", after: "cały" },
];

export default function ViewAllCards() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={0} md={3} />
        <Grid item xs={12} md={6}>
          <TableContainer
            component={Paper}
            style={{ margin: "12px", width: "unset" }}
          >
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "aliceblue" }}>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Base Word
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Translated Word
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.before}
                    </TableCell>
                    <TableCell align="right">{row.after}</TableCell>
                    <TableCell align="right">
                      <IconButton aria-label="delete">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={0} md={3} />
      </Grid>
      <GoBackButton />
    </>
  );
}
