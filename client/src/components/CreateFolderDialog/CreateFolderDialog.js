import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import languages from "../../constants/languages";

export default function CreateFolderDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
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
        />
        <Autocomplete
          options={languages}
          getOptionLabel={(option) => option.full}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Input language" variant="outlined" />
          )}
        />
        <Autocomplete
          options={languages}
          getOptionLabel={(option) => option.full}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Output language" variant="outlined" />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
