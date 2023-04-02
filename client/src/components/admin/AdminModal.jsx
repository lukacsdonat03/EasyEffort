import { Modal, Typography } from '@mui/material';
import React, { useState } from 'react'

export const AdmimnModal = (props) => {
 
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div>
    <button className='dashboard-button' onClick={handleOpen}>More...</button>
    <Modal open={open} onClose={handleClose}>
      <div className='modal-container'>
        <Typography
          variant='h2'
          color={" #0d1f2d"}
          align='center'
        >
          {props.users.fullname}
        </Typography>
        <p>Modal Content</p>
        <button className='dashboard-button' onClick={handleClose}>
          Close
        </button>
      </div>
    </Modal>
    </div>
  )
}
