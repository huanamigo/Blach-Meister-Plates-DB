import React, { useState, Fragment } from 'react';
import {
  Button,
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
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import plates from '../../plates.json';
import styles from './AddButton.module.scss';

const AddButton = () => {
  const [open, setOpen] = useState(false);
  const [plate, setPlate] = React.useState('');
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');

  const handleSelect = (event) => {
    setPlate(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = (cancel) => {
    if (cancel) {
      setPlate('');
      setName('');
      setDesc('');
    }
    setOpen(false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#87d74b',
      },
      background: {
        paper: '#090918',
      },
    },
  });

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <>
      <button className={styles.addBtn} onClick={handleClickOpen}>
        Add
      </button>
      <ThemeProvider theme={darkTheme}>
        <Dialog open={open} onClose={handleClickClose} fullWidth={true}>
          <DialogTitle>Add new post</DialogTitle>
          <DialogContent
            sx={{
              flexDirection: 'column',
              m: 'auto',
              gap: 2,
              width: 'fit-content',
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="desc"
              label="Description"
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              value={desc}
              onChange={(event) => {
                setDesc(event.target.value);
              }}
            />

            <InputLabel id="plates-select">Select plate</InputLabel>
            <Select
              labelId="plates-select"
              id="plates-select-input"
              label="Select plate"
              value={plate}
              onChange={handleSelect}
              fullWidth
              native
            >
              <option value={''}></option>
              {plates.map((plate) => (
                <optgroup label={plate.name} key={plate.name}>
                  {plate.items.map((blacha) => (
                    <option value={blacha.plate} key={blacha.plate}>
                      {blacha.fullName} ({blacha.plate})
                    </option>
                  ))}
                </optgroup>
              ))}
            </Select>

            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload photo
              <VisuallyHiddenInput type="file" />
            </Button>
          </DialogContent>

          <DialogActions>
            <button onClick={() => handleClickClose(true)}>Cancel</button>
            <button onClick={() => handleClickClose(false)}>Add</button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
};

export default AddButton;
