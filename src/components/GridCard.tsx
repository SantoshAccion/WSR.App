import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import PostAddIcon from '@mui/icons-material/PostAdd';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GridTable from './GridTable';
import GridCardSummery from './GridCardSummery';
import { makeStyles } from '@mui/styles';
import Slider from '@mui/material/Slider';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlaceIcon from '@mui/icons-material/Place';


const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
      label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
      label: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
      label: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
  ];


  const useStyles = makeStyles(theme => ({
    tab: { 
        '& .MuiBox-root': {
          padding: '0px',
          },
        },
    prodFact:{
      display: 'flex',
      paddingLeft:'10px',
      paddingRight:'10px'
    },
    card:{
      maxWidth: 350 ,
      padding:'0px !important',
      // width:340,
      width:250,
      boxShadow: '0px 0px 10px 1px #bdbdbd',
      marginRight: '6px'
      },
      outerborder:{
        border: '1px solid',
        borderRadius: '5px',
        padding: '2px',
        marginRight:'6px',
        height:'14px !important',
        width:'14px !important'
      },
      restarticon:{
        border: '1px solid',
        padding: '2px',
        position:'relative',
        top: '5px !important',
        borderRadius:'20px',
        height:'12px !important',
        width:'12px !important'
      },
      mainBox1:{
        flexGrow: 1, 
        display: 'flex',
        justifyContent:'space-between',
        padding:'10px',
        
      },
      mainBox2:{
        flexGrow: 1,
        paddingLeft:'10px',
        paddingRight:'10px',
         marginTop:'10px',
         display: 'flex' ,
         justifyContent:'space-around' 

         
      },
      mainBox3:{
        flexGrow: 1, 
        marginTop:'4px',
        display: 'flex' ,
        justifyContent:'space-between'
      },
      p1:{
        background: '#BCD5E3',
        padding: '5px 5px 0px 5px',
        borderRadius: '5px',
        marginRight:'7px !important',
        fontSize:'12px !important'
      },
      p2:{
        background: '#DFF2FF',
        padding: '5px 5px 0px 5px',
        borderRadius: '5px',
        lineHeight: '12px',
      },
      textfield:{
        width: 80,
        paddingRight: '1.6rem !important',
        height:'20px'
      }

    }));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




export default function GridCard(props) {

  

    const classes = useStyles();
    const background = props.backColor;

 

  return (
    <Card className={classes.card} id="cards">
      <CardContent sx={{padding:0}}>
        <Box className={classes.mainBox1} sx={{background:background}}>
            <Typography variant='h6' component={'span'} sx={{lineHeight:'unset'}}>243421 GIS1</Typography>
            <Box sx={{display: {md: 'flex' }}}>
                <PostAddIcon className={classes.outerborder} color="primary"/>
                <ShowChartRoundedIcon className={classes.outerborder} color="primary" />
                <KeyboardArrowUpIcon sx={{marginRight:'0px'}} className={classes.outerborder} color="primary" />
            </Box>
        </Box>
        <Box className={classes.mainBox2}> 
            <Box>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                size="small"
                sx={{marginRight:'6px',width:'78px'}}
                renderInput={(params) => 
                    <TextField {...params} 
                        label="Grazing" 
                        // inputProps={{style: {fontSize: 12}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 10,top: '-3px'}}} // font size of input label
                    />
                    
                    }
                />
            </Box>
            <Box>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size="small"
                    sx={{marginRight:'6px',width:'127px'}}
                    renderInput={(params) => 
                        <TextField {...params} 
                        label="No Irrigation Practice" 
                        // inputProps={{style: {fontSize: 12}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 9}}} // font size of input label
                        />
                    
                    }
                />
            </Box>
            <PlaceIcon className={classes.restarticon} sx={{top:0}} color="primary"/>

        </Box>
        <Box sx={{paddingLeft:'10px',paddingRight:'10px'}}>
            <Box id="textfield-box" className={classes.mainBox3}>
                <Typography variant='h6' component={'span'} sx={{lineHeight:'1.9rem'}}>share</Typography>
                <TextField id="outlined-basic" label="100%" variant="outlined" size="small" className={classes.textfield}
                            inputProps={{style: {fontSize: 12}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 12,top: '3px'}}} // font size of input label
                            
                            />
                
            </Box>
            <Box className={classes.mainBox3}>
                <Typography variant='h6' component={'span'} sx={{width:'103px',lineHeight:1.3}}>Insurable Acres by County</Typography>
                <Box id="textfield-box">
                    <TextField id="outlined-basic" label="10000" variant="outlined" size="small"  sx={{width: 80,marginRight:'7px'}}
                                inputProps={{style: {fontSize: 12}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 12,top: '3px'}}} // font size of input label
                                
                                />
                    <RestartAltIcon color="primary" sx={{top:'12px !important'}} className={classes.restarticon} />
                </Box>

            </Box>
            <Box className={classes.mainBox3}>
                <Typography variant='h6' component={'span'} sx={{lineHeight:'2.9rem'}}>Insurable Acres</Typography>
                <Box id="textfield-box">
                    <TextField id="outlined-basic" label="500" variant="outlined" size="small"  sx={{width: 100,marginRight:'7px'}}
                                inputProps={{style: {fontSize: 12}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 12,top: '3px'}}} // font size of input label
                                
                                />
                    <RestartAltIcon color="primary"  sx={{top:'12px !important'}} className={classes.restarticon} />
                </Box>
                

            </Box>
        </Box>
      
        <Box className={classes.mainBox3} sx={{ paddingLeft:'10px',paddingRight:'10px' }}>
                <Typography variant='h6' component={'span'}>County Based Value</Typography>
                <Box sx={{display: {md: 'flex' }}}>
                    <Typography className={classes.p1}>
                      56.45
                  </Typography>

                  <LightbulbIcon color='primary'  sx={{top:'3px !important'}} className={classes.restarticon}/>
                </Box>

        </Box>
        <Box className={classes.prodFact}>
                    <Typography variant='h3' component={'span'} sx={{lineHeight:2.167,marginRight:'2rem'}}> Prod.Factor 1.45 </Typography>
                    <Slider defaultValue={50} size="small" aria-label="Default" valueLabelDisplay="auto" sx={{width:'45%'}}/>
        </Box>
        <Box className={classes.mainBox2}>
            <Typography variant='h3' component={'span'}>Coverage/Level</Typography>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    size="small"
                    sx={{width:"63px",marginLeft:'10px'}}
                    renderInput={(params) => <TextField {...params} 
                    label="80%" 
                    // inputProps={{style: {fontSize: 12}}} // font size of input text
                    InputLabelProps={{style: {fontSize: 12,top: '-3px'}}} // font size of input label
                    />}
                />
                <Typography variant='h6' component={'span'} className={classes.p2}>Cove./Acre 56.45</Typography>
        </Box>

        <GridTable tableColor={background}/>
        <GridCardSummery />
      
        
      </CardContent>
      
    </Card>
  );
}