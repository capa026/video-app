import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space=between',
    }}
  >
    hola
  </Stack>
);
export default Navbar;
