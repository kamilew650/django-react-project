import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FolderContext from "../../context/FolderContext";
import fetchAuthorized from "../../utils/fetchAuthorized/fetchAuthorized";

export default function CreateCardDialog(props) {
  const [toTranslate, setToTranslate] = React.useState("");
  const [translated, setTranslated] = React.useState("");
  const [context, setContext] = useContext(FolderContext);
  const history = useHistory();

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleAdd = () => {
    fetchAuthorized("createFolder", "POST", {
      card: { before: toTranslate, after: translated },
      folderId: history.location.pathname.replace("/folder/", ""),
    });

    handleClose();
  };

  const translateHandler = async () => {
    fetch(
      "https://translation.googleapis.com/language/translate/v2?" +
        new URLSearchParams({
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          q: toTranslate,
          source: context.fromLang,
          target: context.toLang,
        }),
      {
        method: "post",
      }
    )
      .then((res) => res.json(res))
      .then((fetched) =>
        setTranslated(fetched.data?.translations[0]?.translatedText)
      );
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add new card</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="word"
          label="Word to translate"
          fullWidth
          value={toTranslate}
          onChange={(e) => setToTranslate(e.target.value)}
        />
        <TextField label="Translated" value={translated} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => translateHandler()}
          color="primary"
          disabled={!toTranslate}
        >
          Translate
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary" disabled={!translated}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
