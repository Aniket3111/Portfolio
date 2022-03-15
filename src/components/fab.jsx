import {React,useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
  });
  const listenToScroll = () => {
    let heightToshowFrom = 500;
    const winScroll = 
    document.documentElement.scrollTop || document.body.scrollTop
       
    if (winScroll > heightToshowFrom) { 
      // to limit setting state only the first time         
         setIsVisible(true);
    }
    else{
      setIsVisible(false);
    }  
  };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 },display:"grid" }}>
      <Fab href="https://www.linkedin.com/in/aniket-rajani-9487b6191"  color="primary" aria-label="Linkedin">
        <LinkedInIcon fontSize="large"/>
      </Fab>
      <Fab href="https://github.com/Aniket3111" aria-label="Github">
        <GitHubIcon fontSize="large" />
      </Fab>
      <Fab href="mailto:aniketrajani03@gmail.com" color="info" aria-label="Mail">
        <EmailIcon fontSize="large" />
      </Fab>
      {
   isVisible 
      && 
      <Fab href="#top" color="info" aria-label="Back to Top">
      <ArrowUpwardIcon fontSize="large" />
      </Fab>}
    </Box>
  );
}