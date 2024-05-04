import * as React from 'react';
import TextField  from '@mui/material/TextField';
import Button from'@mui/material/Button';
import { Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function MultilineTextFields() {
    return (
        <>
            <div className='d-flex flex-column justify-content-start w-100 h-auto m-3 p-3 '>
                <Typography variant='h4' className=' m-3 w-auto'>Feedback:</Typography>
                <TextField
                    id="Feedback"
                    label="Your Feedback:"
                    placeholder='Enter Message'
                    multiline
                    rows={4}
                    className='w-auto'
                />
                <Button variant="contained"className=' align-item-center' endIcon={<SendIcon />}>
                    Submit
                </Button>
            </div>
        </>
    );
}
