import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { usePage } from "@inertiajs/react";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Flash() {
    const flash = usePage().props.flash
    const [open, setOpen] = React.useState(true)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (<>
        {
            flash.message &&
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={ flash.status }
                    sx={{
                        marginTop: '40%',
                         width: '100%' ,
                         fontSize: '18px'
                    }}>
                { flash.message && flash.message }
                </Alert>
            </Snackbar>
        }
    </>)


}
