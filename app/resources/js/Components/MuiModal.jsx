/** @jsxImportSource @emotion/react */

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { defaultTheme } from './DefaultThemeProvider';
import { css } from '@emotion/react';

import Pagination from '@mui/material/Pagination';

export default function MuiModal(props) {
    const open = props.openModal
    const setOpen = props.setOpenModal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const palette = defaultTheme().palette
    const breakpoints = defaultTheme().breakpoints.values

    const formData = props.formData
    const setFormData = props.setFormData
    const search = props.search
    const setSearch = props.setSearch
    const searchCustomers = props.searchCustomers
    const setSearchCustomers = props.setSearchCustomers
    const handleSearchCustomers = props.handleSearchCustomers
    const processing = props.processing
    const page = props.page
    const setPage = props.setPage


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: breakpoints.md,
        height: '100vh',
        bgcolor: palette.bg.color1,
        border: '2px solid ${palette.bg.color3}',
        boxShadow: 24,
        p: 4,
        overflowX: 'bisible',
        overflowY: 'auto',
    };

    const handlePagination = (event, value) => {
        setPage(data => (value));
        handleSearchCustomers(search, value)
    };

    const handleButton = customer => {
        setFormData(data => ({
            ...data,
            ['customer_id']: customer.id
        }))
        setSearch(`id:${customer.id} - ${customer.name}（${customer.kana}）`)
        setOpen(false)
    }


    return (
        <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}

        >
            <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                顧客検索
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}
                    component="table"
                    css={css`
                        tr {
                            display:flex;
                            flex-direction: row;
                            align-items: center;
                            width: calc(${breakpoints.md}px - 68px - 20px);
                            border-bottom: 1px ${palette.bg.color4} solid;
                        }
                        th, td {
                            width: calc( (100% - 100px) / 3 );
                            text-align:left;
                        }
                        th:nth-of-type(1),
                        td:nth-of-type(1) {
                            width: 100px;
                            text-align:right;
                            padding-right:16px;
                        }
                        th:nth-of-type(1) {
                            padding-right:32px;
                        }
                    `}
                >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>指名</th>
                            <th>カナ</th>
                            <th>電話番号</th>
                        </tr>
                    </thead>
                    <tbody>
                    { searchCustomers.data.data.map((customer, index) => (
                        <tr key={index}>
                            <td>
                                <button
                                    css={css`
                                        padding: 8px 16px;
                                        border-radius: 6px;
                                        color: ${palette.info.main};
                                        &:hover {
                                            color: ${palette.info.light};
                                            background: ${palette.info.dark};
                                        }
                                    `}
                                    onClick={ e => handleButton(customer) }
                                >
                                    { customer.id }
                                </button>
                            </td>
                            <td>{ customer.name }</td>
                            <td>{ customer.kana }</td>
                            <td>{ customer.tel }</td>
                        </tr>
                    )) }
                    </tbody>
                </Typography>

                <div css={css`
                margin-top: 24px;
                    text-align:center;
                `}>
                    <Pagination
                        css={css`
                            display: inline-block;
                            *, * * { color: ${palette.text.primary} !important; }
                            button {
                                background: ${palette.bg.color3};
                                &[aria-current="true"] {
                                    background: none;
                                    border: 1px ${palette.bg.color5} solid;
                                }
                           }
                        `}
                        count={searchCustomers.data.last_page}
                        page={page}
                        onChange={handlePagination}
                        disabled={processing}
                    />
                </div>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={ e => { setOpen(false) } }
                >
                    閉じる
                </Button>

            </Box>
            </Fade>
        </Modal>
        </div>
    );
}
