import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions/productActions';
//Material UI
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import CloseIcon from '@material-ui/icons/Close';
import IcoBtnWithTooltip from '../commons/IcoBtnWithTooltip';
import CreateProductForm from './CreateProductForm';

const CreateProduct = ({ UI, addProduct, classes, ...props }) => {
  const [productData, setProductData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (UI.errors) {
      setErrors(UI.errors);
    }
  }, [UI.errors]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setProductData(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addProduct(productData);
    handleOpen();
  };

  return (
    <>
      <IcoBtnWithTooltip onClick={handleOpen} tipText='Create a product'>
        <PlaylistAddIcon />
      </IcoBtnWithTooltip>
      <Dialog open={isOpen} onClose={handleOpen} fullWidth maxWidth='sm'>
        <div className={classes.titleBar}>
          <DialogTitle>Create a Product</DialogTitle>
          <IcoBtnWithTooltip
            tipText='Close'
            onClick={handleOpen}
            btnClass={classes.closeButton}
          >
            <CloseIcon />
          </IcoBtnWithTooltip>
        </div>
        <DialogContent>
          <CreateProductForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            isLoading={UI.isLoading}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

CreateProduct.propTypes = {
  UI: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  UI: state.UI,
});
const mapDispatchToProps = {
  addProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateProduct));
