import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
      <DialogContent>
        <DialogContentText>
          Tu trzeba dodać fetcha przy submicie
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Folder name"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="from"
          label="Input language"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="from"
          label="Output language"
          fullWidth
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
