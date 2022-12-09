import React from 'react'
import {Box} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Autocomplete from '@mui/material/Autocomplete';
import QuoteList from './QuoteList';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
 
  premium:{
    flexGrow: 1,
    display: 'flex',
    justifyContent:'space-between',
    padding:'5px 9px'

  },
  
  outerborder:{
    border: '1px solid',
    borderRadius: '20px',
    padding: '2px',
    marginRight:'6px',
    height:'12px !important',
    width:'12px !important',
    position: 'relative',
    top: '5px'
  },
  mt3:{
    marginTop:'3px'
  },
  color:{
    color:'#fff'
  },
  box:{
    flexGrow: 1,
    display: 'flex',
    justifyContent:'space-between',
  },
  mainBox1:{
    flexGrow: 1,
    marginTop:'8px',
    paddingLeft:'7px', 
    display: 'flex'
  },
  mainBox2:{
    position: 'relative',
    top: '5px',
    left: '8px',
    display:'flex'
  }


});


const AgentInfo = () => {
  const classes = useStyles();

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
  return (
      <div className={classes.mt3}>
          <Accordion sx={{boxShadow:'none'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.color}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className={classes.box}>
                <Typography variant='h5' component={'span'} sx={{width:'90px'}}>Adams,co Quote1</Typography>
                <Typography variant='h5' component={'span'} sx={{lineHeight: '2rem',marginRight: '10px'}}>$0.00</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box className={classes.mainBox1}> 
                      <Box>
                          <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={top100Films}
                              size="small"
                              sx={{marginRight:'6px',width:'109px'}}
                              renderInput={(params) => 
                                  <TextField {...params} 
                                    label="State" 
                                    // inputProps={{style: {fontSize: 12}}} // font size of input text
                                    InputLabelProps={{style: {fontSize: 12,top: '-3px'}}} // font size of input label
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
                              sx={{marginRight:'6px',width:'109px'}}
                              renderInput={(params) => <TextField {...params} 
                                label="Country" 
                                // inputProps={{style: {fontSize: 12}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 12,top: '-3px'}}} // font size of input label
                              />}
                            />
                      </Box>
                </Box>
              
                <Box>
                    <Box id="textfield-box" className={classes.premium}>
                        <TextField id="outlined-basic" label="Quote 1" variant="outlined" size="small"  sx={{width: 235}}
                        inputProps={{style: {fontSize: 12}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 12,top: '3px'}}} // font size of input label
                        
                        />
                        <Box className={classes.mainBox2}>
                            <AddIcon className={classes.outerborder} color="primary" />
                            <DeleteOutlineTwoToneIcon className={classes.outerborder} color="primary" />
                        </Box>
                    
                    </Box>
                    <QuoteList />
                    <QuoteList />
                    <QuoteList />
                </Box>
            </AccordionDetails>
          </Accordion>
     
      </div>
  )
}

export default AgentInfo
