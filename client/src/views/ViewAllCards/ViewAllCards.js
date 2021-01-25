import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import fetchAuthorized from "../../utils/fetchAuthorized/fetchAuthorized";

export default function ViewAllCards() {
  const [cards, setCards] = React.useState([]);
  const [reset, setReset] = React.useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchAuthorized("getAllCards", "POST", {
      id: history.location.pathname.replace("/viewAll/", ""),
    })
      .then((res) => res.json())
      .then((json) => setCards(json?.body?.cards));
  }, [history.location.pathname, reset]);

  const handleDelete = (e) => {
    fetchAuthorized("deleteCard", "POST", {
      folderId: history.location.pathname.replace("/viewAll/", ""),
      cardId: e,
    })
      .then((res) => res.json())
      .then((json) => setCards(json?.body?.cards));

    setReset(!reset);
  };

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
                {cards.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.before}
                    </TableCell>
                    <TableCell align="right">{row.after}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(row.id)}
                      >
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
