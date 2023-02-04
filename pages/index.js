import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from "next/link";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>          
          <Link href={`/post`}>
            Posts
          </Link>
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <Link href={`/employees`}>
              Employees
            </Link>
        </Typography>
      </Box>
    </React.Fragment>
  );
}