import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { deleteProduct } from '../../redux/actions/productActions';
//Material UI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IcoBtnWithTooltip from '../commons/IcoBtnWithTooltip';

const DeleteProduct = ({ sku, deleteProduct, classes, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    deleteProduct(sku);
  };

  return (
    <>
      <IcoBtnWithTooltip onClick={handleOpen} tipText='Delete Product'>
        <DeleteIcon style={{ color: '#ef5350' }} fontSize='small' />
      </IcoBtnWithTooltip>
      <Dialog open={isOpen} onClose={handleOpen} fullWidth maxWidth='sm'>
        <DialogTitle>
          Are you shure you want to delete this product?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleOpen} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleDelete} color='secondary'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

DeleteProduct.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteProduct,
};

export default connect(null, mapDispatchToProps)(DeleteProduct);
