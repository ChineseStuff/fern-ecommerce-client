import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
//Mui stuff
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Product = props => {
  const classes = useStyles();
  const {
    product: { name, imageUrl, likeCount, description, sku, createdAt },
  } = props;

  dayjs.extend(relativeTime);
  return (
    <Card className={classes.card} component={Link} to={`/products/${sku}`}>
      <CardMedia image={imageUrl} title={name} className={classes.image} />
      <CardContent className={classes.content}>
        <Typography variant='h5'>{name}</Typography>
        <Typography variant='body2' color='textSecondary'>
          {likeCount} Likes
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {dayjs(createdAt).fromNow()}
        </Typography>
        <Typography variant='body1'>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Product;