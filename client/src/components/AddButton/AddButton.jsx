import React, { useState, Fragment } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  Select,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import plates from '../../plates.json';
import styles from './AddButton.module.scss';

const AddButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#87d74b',
      },
    },
  });

  return (
    <>
      <button className={styles.addBtn} onClick={handleClickOpen}>
        Add
      </button>
      <ThemeProvider theme={darkTheme}>
        <Dialog open={open} onClose={handleClickClose}>
          <DialogTitle>Add new post</DialogTitle>
          <DialogContent>
            <DialogContentText>dodaj se posta</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              variant="outlined"
            />

            <InputLabel htmlFor="plates-select">Select plate</InputLabel>
            <Select
              native
              defaultValue=""
              id="plates-select"
              label="Select plate"
            >
              {plates.map((plate) => (
                <Fragment key={plate.name}>
                  <optgroup label={plate.name}>
                    {plate.items.map((blacha) => (
                      <option value={blacha.plate} key={blacha.plate}>
                        {blacha.fullName} ({blacha.plate})
                      </option>
                    ))}
                  </optgroup>
                </Fragment>
              ))}
            </Select>
          </DialogContent>

          <DialogActions>
            <button onClick={handleClickClose}>cancel</button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
};

export default AddButton;
