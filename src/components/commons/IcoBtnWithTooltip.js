import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export default ({ children, onClick, tipText, tipPlacement, btnClass }) => (
  <Tooltip title={tipText} placement={tipPlacement}>
    <IconButton onClick={onClick} className={btnClass}>
      {children}
    </IconButton>
  </Tooltip>
);
