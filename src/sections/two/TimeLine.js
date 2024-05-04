// TimeLineb.js
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

import Image from '../../assets/Image/_2b6b22ee-786e-42ec-9d7d-9bb39a9090cc.jfif';
import RequAna from './process/RequAna';
import PlanDesig from './process/PlanDesig';
import Develop from './process/Develop';
import Test from './process/Test';
import Deploy from './process/Deploy';
import Feed from './process/Feed';

export default function TimeLineb({ handleProcessComplete, handleProcessClose }) {
  const [showRequAna, setShowRequAna] = useState(false);
  const [showPlanDesig, setShowPlanDesig] = useState(false);
  const [showDevelop, setShowDevelop] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showDeploy, setShowDeploy] = useState(false);
  const [showFeed, setShowFeed] = useState(false);

  const toggleProcess = (process, setShowProcess) => {
    setShowProcess(!process);
    if (!process) {
      handleProcessComplete(process);
    } else {
      handleProcessClose(process);
    }
  };

  return (
    <div className='d-flex flex-column w-auto h-auto justify-content-around'>
      <div className='d-flex flex-row w-auto h-auto m-3'>
        <Card sx={{ maxWidth: 345 }} className='m-3 w-50 h-auto'>
          <CardActionArea onClick={() => toggleProcess(showRequAna, setShowRequAna)}>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"> Requirement Analysis </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className='m-3 w-50 h-auto'>
          <CardActionArea onClick={() => toggleProcess(showPlanDesig, setShowPlanDesig)}>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"> Planing and Designing</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className='m-3 w-50 h-auto'>
          <CardActionArea onClick={() => toggleProcess(showDevelop, setShowDevelop)}>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"> Developing </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className='m-3 w-50 h-auto'>
          <CardActionArea onClick={() => toggleProcess(showTest, setShowTest)}>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Testing</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className='m-3 w-50 h-auto'>
          <CardActionArea onClick={() => toggleProcess(showDeploy, setShowDeploy)}>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Deployment</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className='m-3 w-50 h-auto'>
          <CardActionArea onClick={() => toggleProcess(showFeed, setShowFeed)}>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Feedback and Maintenance</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className='m-3 p-3 w-auto h-auto align-item-center'>
        {showRequAna && <RequAna />}
        {showPlanDesig && <PlanDesig />}
        {showDevelop && <Develop />}
        {showTest && <Test />}
        {showDeploy && <Deploy />}
        {showFeed && <Feed />}
      </div>
    </div>
  );
}

TimeLineb.propTypes = {
  handleProcessComplete: PropTypes.func.isRequired,
  handleProcessClose: PropTypes.func.isRequired
};