import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import languages from "../../constants/languages";
import fetchAutorized from "../../utils/fetchAuthorized/fetchAuthorized";

export default function CreateFolderDialog(props) {
  const [name, setName] = React.useState("");
  const [fromLang, setFromLang] = React.useState({
    full: "Afrikaans",
    short: "af",
  });
  const [toLang, setToLang] = React.useState({ full: "Albanian", short: "sq" });
  const handleClose = () => {
    props.setOpen(false);
  };

  const handleAdd = () => {
    fetchAutorized("createFolder", "POST", {
      name,
      fromLang: fromLang.short,
      toLang: toLang.short,
    });

    handleClose();
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add new folder</DialogTitle>
      <DialogContent
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Folder name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Autocomplete
          options={languages}
          getOptionLabel={(option) => option.full}
          style={{ width: 300 }}
          value={fromLang}
          onChange={(e, selection) => {
            setFromLang(selection);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Input language" variant="outlined" />
          )}
        />
        <Autocomplete
          options={languages}
          getOptionLabel={(option) => option.full}
          style={{ width: 300 }}
          value={toLang}
          onChange={(e, selection) => setToLang(selection)}
          renderInput={(params) => (
            <TextField {...params} label="Output language" variant="outlined" />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleAdd}
          color="primary"
          disabled={!(name && fromLang && toLang)}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
