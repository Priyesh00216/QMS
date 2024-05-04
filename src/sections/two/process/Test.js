import * as React from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { ArrowCircleRightRounded } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Test() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [dummyText, setDummyText] = React.useState('');

    const handleButtonClick = (event) => {
        if (event.currentTarget.tagName === 'BUTTON') {
            setAnchorEl(event.currentTarget);
            setDummyText('Great sentences are the building blocks of great writing, but getting them just right is something that even professional writers regularly fuss over. There are many ways to muddy a sentence: complicated structure, misplaced modifiers, or confusing delivery. Two of the most common blunders involve incomplete or run-on sentences, which make writing difficult to understand. Luckily we have helpful resources to guide you toward writing crisper, cleaner, easy-to-read sentences so that your ideas don’t get lost in the shuffle.');
        } else {
            setAnchorEl(event.target);
        }
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'popover' : undefined;

    const inputRef = React.useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setDummyText(file ? `Selected file: ${file.name}` : '');
        handleClosePopover(); // Close the popover after file selection
    };

    return (
        <Paper elevation='5' className='w-100 h-100 m-3'>
            <Box sx={{ width: '100%' }}>
                <Typography variant='h4' className='p-3'>Testing :</Typography>
                <Typography variant='h3' className='p-3'> Upload Your File Here </Typography>
                <Stack spacing={2}>
                    <Item>
                        <Button variant="outlined" startIcon={<ArrowCircleRightRounded />} onClick={handleButtonClick}>
                            Review Uploaded File
                        </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClosePopover}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <Card className='d-flex flex-column justify-content-center w-auto h- m-3'>
                                <div className='m-3 align-item-center h-auto w-auto'>
                                <Typography>{dummyText}</Typography>
                                </div>
                                <div className='m-3 align-item-end w-auto h-auto'>
                                <Button variant="outlined">
                                            Export
                                        </Button>
                                </div>
                            </Card>
                        </Popover>
                    </Item>
                    <Item>
                        <div>
                            <input ref={inputRef} type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                            <TextField
                                label="Choose File"
                                variant="outlined"
                                className='w-100'
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <Button variant="outlined" component="span" onClick={() => inputRef.current.click()}>
                                            Browse
                                        </Button>
                                    ),
                                }}
                            />
                        </div>
                    </Item>
                </Stack>
            </Box>
        </Paper>
    );
}
