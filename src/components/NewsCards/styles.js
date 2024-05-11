import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 5%',
    width: '100%',
    height: '100%',
    margin: 0,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '400px', // Fixed card height
    padding: '2rem', // Increased padding
    borderRadius: '20px',
    color: 'white',
    background: 'black',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)', // Dark blue glow effect
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'transform 0.3s ease',
      boxShadow: '0 8px 16px rgba(0, 0, 255, 0.5)', // Dark blue glow effect on hover
    },
  },
  infoCards: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5rem', // Increased font size
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: '1rem', // Increased margin bottom
    textShadow: '50px 50px 50px rgba(255, 0, 0, 0.5)',
  },
  info: {
    fontSize: '1.2rem', // Increased font size
    marginTop: '1rem', // Increased margin top
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(255, 0, 0, 0.5)',
  },
  trySaying: {
    fontSize: '1rem', // Increased font size
    marginTop: '1rem', // Increased margin top
    fontStyle: 'italic',
    textShadow: '2px 2px 4px rgba(255, 0, 0, 0.5)',
  },
  // Media queries for responsiveness
  '@media (max-width: 600px)': {
    card: {
      height: '300px', // Adjust height for smaller screens
    },
    title: {
      fontSize: '1.2rem', // Adjust font size for smaller screens
    },
    info: {
      fontSize: '1rem', // Adjust font size for smaller screens
    },
    trySaying: {
      fontSize: '0.8rem', // Adjust font size for smaller screens
    },
  },
}));

export default useStyles;
