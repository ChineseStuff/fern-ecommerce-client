import React from 'react';

//Material UI
import styles from './styles';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const CreateProductForm = ({
  handleSubmit,
  handleChange,
  errors,
  classes,
  isLoading,
  ...props
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          name='name'
          type='text'
          label='Name'
          variant='outlined'
          placeholder='Insert a name for Product'
          error={errors.name ? true : false}
          helperText={errors.name}
          className={classes.textField}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          required
          name='description'
          type='text'
          label='Description'
          variant='outlined'
          multiline
          rows='3'
          placeholder='Describing your product in a clear way will help in its sale'
          error={errors.description ? true : false}
          helperText={errors.description}
          className={classes.textField}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          required
          name='price'
          type='text'
          label='Price'
          variant='outlined'
          error={errors.price ? true : false}
          helperText={errors.price}
          className={classes.textField}
          onChange={handleChange}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          required
          name='sku'
          type='text'
          label='SKU'
          variant='outlined'
          placeholder='with-this-format'
          error={errors.sku ? true : false}
          helperText={errors.sku}
          className={classes.textField}
          onChange={handleChange}
          fullWidth
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submit}
          disabled={isLoading}
        >
          Submit
          {isLoading && (
            <CircularProgress size={30} className={classes.progress} />
          )}
        </Button>
      </form>
    </>
  );
};

export default withStyles(styles)(CreateProductForm);
