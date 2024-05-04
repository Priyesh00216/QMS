import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';


export default function BasicPopover(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { loading = false } = props;
    const inputRef = React.useRef(null);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Handle the selected file
        console.log('Selected file:', file);
      };

    const handleButtonClick = () => {
        // Trigger the file input click event
        inputRef.current.click();
      };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div className="justify-content-end align-self-center my-2 px-2">
                {loading ? null : (
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <ManageAccountsOutlinedIcon />
                    </IconButton>
                )
                }
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField id="outlined-search" label="Search field" type="search" />
                        <TextField
                            id="outlined-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                        />
                        <div>
                            <input ref={inputRef} type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                            <TextField label="Choose File" variant="outlined" className='w-100'
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <Button onClick={handleButtonClick} variant="outlined" component="span">
                                            Browse
                                        </Button>
                                    ),
                                }}
                            />
                        </div>
                    </div>
                </Box>
            </Popover>
        </div>
    );
}

BasicPopover.propTypes = {
    loading: PropTypes.bool,
};
