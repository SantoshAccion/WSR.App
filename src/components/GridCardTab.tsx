import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GridCard from './GridCard';



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

const GridCardTab = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

    return (
        <Box sx={{ width: '100%' }} id="grid-card-panel">
            <Box sx={{ borderBottom: 1, borderColor: 'divider',marginLeft:'0.35rem' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" id="head-tab"
                    TabIndicatorProps={{
                        sx: {
                            backgroundColor: 'primary',
                        },
                    }}
                >
                    <Tab label="Kent, DE Quote 1" {...a11yProps(0)} sx={{fontSize:'12px',textTransform:'capitalize'}}/>
                    <Tab label="Kent, DE Quote 2" {...a11yProps(1)} sx={{fontSize:'12px',textTransform:'capitalize'}}/>
                    <Tab label="Kent, DE Quote 3" {...a11yProps(2)} sx={{fontSize:'12px',textTransform:'capitalize'}}/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <GridCard backColor={'#BFE6CC'}/>
                <GridCard backColor={'#E3E1FE'}/>
                <GridCard backColor={'#FFF4D2'}/>
                <GridCard backColor={'#0093dd'}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <GridCard />
                <GridCard />
                <GridCard />
                
            </TabPanel>
            <TabPanel value={value} index={2}>
                <GridCard />
                <GridCard />
               
            </TabPanel>
        </Box>
        
    )
}

export default GridCardTab
