import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@mui/styles';
import DataTable from './DataTable';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
 

const GridCardSummery = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
      
      const summery = [
        {
        name:'Subsidy',
        value:'55%'
      },
      {
        name:'Total Premium',
        value:'$0.00'
      },
      {
        name:'Total Indemenity',
        value:'$0.00'
      },
      {
        name:'Net Indeminity',
        value:'$0.00'
      },
      {
        name:'Net Coverage',
        value:'$0.00'
      }
    ]


  return (
    <>
        <Box sx={{ width: '100%' }} id="grid-panel">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
                TabIndicatorProps={{
                    sx: {
                        backgroundColor: 'primary',
                        
                    },
                }}
                >
                    <Tab label="Summery" {...a11yProps(0)} sx={{fontSize:'12px',textTransform:'capitalize',minWidth:'70px',padding:0}}/>
                    <Tab label="Performance" {...a11yProps(1)} sx={{fontSize:'12px',textTransform:'capitalize',minWidth:'70px',padding:0}}/>
                    <Tab label="Dates" {...a11yProps(2)} sx={{fontSize:'12px',textTransform:'capitalize',minWidth:'70px',padding:0}}/>
                    <Tab label="Rainfall" {...a11yProps(3)} sx={{fontSize:'12px',textTransform:'capitalize',minWidth:'70px',padding:0}}/>

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <List id="tabpanel" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                      {summery.map((item) => (
                        <ListItem
                          key={item.value}
                          disableGutters
                          secondaryAction={
                            // <IconButton aria-label="comment">
                              item.value
                            // </IconButton>
                          }
                  >
                    <ListItemText primary={`${item.name}`}/>
                    </ListItem>
                  ))}
              </List>
                
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three
            </TabPanel>
        </Box>
    </>
  )
}

export default GridCardSummery
