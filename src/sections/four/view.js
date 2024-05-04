// @mui
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSettingsContext } from 'src/components/settings';
import TestTable from './TestTable';

// ----------------------------------------------------------------------

export default function FourView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Tested Project </Typography>
      <Grid maxWidth="xs" marginTop={2}>
        <TestTable/>
      {/* <TicketTable data={data}/> */}
      </Grid>
    </Container>
  );
}
