import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
//Material UI
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import IcoBtnWithTooltip from '../commons/IcoBtnWithTooltip';

const CartItem = props => {
  const {
    classes,
    product: { name, imageUrl, price, qty },
    product,
    onAdd,
    onRemove,
  } = props;

  dayjs.extend(relativeTime);
  return (
    <Card className={classes.card}>
      <CardMedia image={imageUrl} title={name} className={classes.image} />
      <CardContent className={classes.content}>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='body2' color='textSecondary'>
          Quantity: {qty}
        </Typography>
        <ButtonGroup>
          <Button
            aria-label='reduce'
            variant='outlined'
            color='primary'
            onClick={e => onRemove(e, product)}
            name='reduce'
          >
            <RemoveIcon style={{ fontSize: '1rem' }} />
          </Button>
          <Button
            aria-label='increase'
            variant='contained'
            color='primary'
            onClick={e => onAdd(product)}
          >
            <AddIcon style={{ fontSize: '1rem' }} />
          </Button>
        </ButtonGroup>
      </CardContent>
      <div className={classes.price}>
        <CardContent>
          <strong>$ {parseFloat(price * qty).toFixed(2)}</strong>
        </CardContent>
        <IcoBtnWithTooltip
          tipText='Remove'
          onClick={e => onRemove(e, product)}
          btnName='delete'
        >
          <DeleteIcon style={{ color: '#ef5350' }} fontSize='small' />
        </IcoBtnWithTooltip>
      </div>
    </Card>
  );
};

export default withStyles(styles)(CartItem);
