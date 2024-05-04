// @mui
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// components
// import { mock_types_data } from 'src/_mock/_types';
import { useSettingsContext } from 'src/components/settings';
import AftPage from './AftPage';
// ----------------------------------------------------------------------

export default function TwoView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Process Page </Typography>
      <AftPage/>
    </Container>
  );
}
