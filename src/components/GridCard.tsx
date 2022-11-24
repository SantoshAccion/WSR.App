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

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function GridCard() {
  return (
    <Card sx={{ maxWidth: 275 ,padding:'0px !important'}}>
      <CardContent sx={{padding:0}}>
        <Box 
            sx={{ flexGrow: 1, display: {md: 'flex' },
            justifyContent:'space-between',
            padding:'5px',
            background:'#BFE6CC'
            }}>
            <Typography variant='h6'>243421 GIS1</Typography>
            <Box sx={{display: {md: 'flex' }}}>
                <ShowChartRoundedIcon color="primary" />
                <PostAddIcon color="primary"/>
            </Box>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop:'10px',display: {md: 'flex' },justifyContent:'space-around' }}> 
            <Box>
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                size="small"
                sx={{marginRight:'8px',width:'110px'}}
                renderInput={(params) => 
                    <TextField {...params} 
                        label="Grazing" 
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
                    sx={{marginRight:'8px',width:'130px'}}
                    renderInput={(params) => 
                        <TextField {...params} 
                        label="No Irrigation Practice" 
                        // inputProps={{style: {fontSize: 12}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 12,top: '-3px'}}} // font size of input label
                        />
                    
                    }
                />
            </Box>
        </Box>
        <Box sx={{padding:'5px'}}>
            <Box id="textfield-box" sx={{ flexGrow: 1, marginTop:'4px',display: {md: 'flex' },justifyContent:'space-between' }}>
                <Typography variant='h6'>share</Typography>
                <TextField id="outlined-basic" label="100%" variant="outlined" size="small"  sx={{width: 100,paddingRight: '1.29rem'}}
                            inputProps={{style: {fontSize: 12}}} // font size of input text
                            InputLabelProps={{style: {fontSize: 12,top: '3px'}}} // font size of input label
                            
                            />
                
            </Box>
            <Box sx={{ flexGrow: 1, marginTop:'4px',display: {md: 'flex' },justifyContent:'space-between' }}>
                <Typography variant='h6'>Insurable Acres by County</Typography>
                <Box id="textfield-box">
                    <TextField id="outlined-basic" label="10000" variant="outlined" size="small"  sx={{width: 100}}
                                inputProps={{style: {fontSize: 12}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 12,top: '3px'}}} // font size of input label
                                
                                />
                    <RestartAltIcon color="primary" sx={{width:'20px',position:'relative',top: '0.5rem'}}/>
                </Box>

            </Box>
            <Box sx={{ flexGrow: 1, marginTop:'4px',display: {md: 'flex' },justifyContent:'space-between' }}>
                <Typography variant='h6'>Insurable Acres</Typography>
                <Box id="textfield-box">
                    <TextField id="outlined-basic" label="500" variant="outlined" size="small"  sx={{width: 100}}
                                inputProps={{style: {fontSize: 12}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 12,top: '3px'}}} // font size of input label
                                
                                />
                    <RestartAltIcon color="primary" sx={{width:'20px',position:'relative',top: '0.5rem'}} />
                </Box>
                

            </Box>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop:'10px',marginBottom:'5px',display: {md: 'flex' },justifyContent:'space-around',borderBottom:'1px solid #EAEAEA' }}>
            <Typography variant='h6' sx={{
                background: '#DFF2FF',
                padding: '5px 5px 0px 5px',
                borderRadius: '5px',
                lineHeight: '12px',
                marginLeft:'6rem'
            }}>County Based Value 56.45</Typography>
            <LightbulbIcon color='primary'/>
        </Box>
        <GridTable />
        <GridCardSummery />
      
        
      </CardContent>
      
    </Card>
  );
}