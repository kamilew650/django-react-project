import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function CreateCardDialog(props) {
  const [toTranslate, setToTranslate] = React.useState("");
  const [translated, setTranslated] = React.useState("");

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add new card</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Tu trzeba dodać obsługę google tłumacza czy coś
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="word"
          label="Word to translate"
          fullWidth
          value={toTranslate}
          onChange={(e) => setToTranslate(e.target.value)}
        />
        <TextField disabled label="Translated" value={translated} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() =>
            console.log(`
          Litwo! Ojczyzno maja! Ty jesteś jak zdrowie,
          Ile cię trzeba cenić, ten tylko się dowie,
          Kto cię stracił. Dziś piękność twą w całej ozdobie
          Widzę i opisuję, bo tęsknię po tobie"
          Panno święta, co Jasnej bronisz Częstochowy
          I w Ostrej świecisz Bramie! Ty, co gród zamkowy
          Nowogródzki ochraniasz z jego wiernym ludem!
          Jak mnie dziecko do zdrowia powróciłaś cudem,
          (Gdy od płaczącej matki pod Twoją opiekę
          Ofiarowany, martwą podniosłem powiekę
          I zaraz mogłem pieszo do Twych świątyń progu
          Iść za wrócone życie podziękować Bogu),
          Tak nas powrócisz cudem na Ojczyzny łono.
          Tymczasem przenoś moją duszę utęsknioną
          Do tych pagórków leśnych, do tych łąk zielonych,
          Szeroko nad błękitnym Niemnem rozciągnionych;
          Do tych pól malowanych zbożem rozmaitem,
          Wyzłacanych pszenicą, posrebrzanych żytem;
          Gdzie bursztynowy świerzop, gryka jak śnieg biała,
          Gdzie panieńskim rumieńcem dzięcielina pała,
          A wszystko przepasane jakby wstęgą, miedzą
          Zieloną, na niej z rzadka ciche grusze siedzą.`)
          }
          color="primary"
        >
          Translate
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary" disabled={!translated}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
