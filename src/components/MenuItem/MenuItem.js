import './MenuItem.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
function MenuItem(props) {
  return (
    <div>
      <Box sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: '#22577A'}}>
        <Button sx={{color:'#fff'}}>{props.children}</Button>
      </Box>
    </div>
  );
}

export default MenuItem;