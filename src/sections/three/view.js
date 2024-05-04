// @mui
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from  '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

// components
import { useSettingsContext } from 'src/components/settings';
// import AnalyticsWidgetSummary from '../one/Ana-widget-summary';
import ProfTable from './ProfTable';

// ----------------------------------------------------------------------

export default function ThreeView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> User Profile </Typography>
      <Grid maxWidth="xs" marginTop={2}>
        <ProfTable/>
      </Grid>
    </Container>
  );
}
