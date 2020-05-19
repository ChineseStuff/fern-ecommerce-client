import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  image: {
    minWidth: 100,
    minHeight: 100,
    backgroundSize: 'contain!important',
    border: '5px solid white',
  },
  content: {
    padding: 25,
    objectFit: 'cover',
  },
});
