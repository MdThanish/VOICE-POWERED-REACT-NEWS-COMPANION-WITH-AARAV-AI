import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    left: 0,
    top: 50,
    bottom: 180,
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2rem'
  },
  link: {
    textDecoration: 'none',
    color: '#846684',
  },
  image: {
    marginLeft: 50,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#846684',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    color: 'white',
    padding: '1rem 5% 0',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  alanLogo: {
    height: '150px',
    borderRadius: '25%',
    [theme.breakpoints.down('sm')]: {
      height: '100px',
    },
  },
  title: {
    fontFamily: 'Arial, sans-serif',
    fontStyle: 'bold' ,
    fontWeight: 'bold',// Specify your preferred font family here
    color: 'white', // Text color
    background: '-webkit-linear-gradient(#eee, #333)', // Gradient background
    WebkitBackgroundClip: 'text', // Clip text to the background area
    WebkitTextFillColor: 'transparent', // Hide the text fill color
    animation: '$glow 1.5s ease-in-out infinite alternate', // Animation
  },
  '@keyframes glow': {
    '0%': {
      textShadow: '0 0 5px white', // Start glowing effect
    },
    '100%': {
      textShadow: ' 0 0 10px white, 0 0 10px white, ', // End glowing effect
    },
  },
}));
