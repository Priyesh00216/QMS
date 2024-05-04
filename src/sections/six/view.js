// @mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import Details from './Detail';

// ----------------------------------------------------------------------

export default function SixView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" className='p-3'> User Account </Typography>
      <Details/>
    </Container>
  );
}
