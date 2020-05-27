export default {
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  detailCard: {
    display: 'flex',
    marginBottom: 20,
    maxWidth: 1000,
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
  price: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    width: '150px',
  },
  bigImage: {
    minWidth: 400,
    minHeight: 400,
    backgroundSize: 'contain!important',
    border: '5px solid white',
  },
  bigContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 25,
    objectFit: 'cover',
  },
  contentTitle: {
    padding: '10px 0 10px 0',
  },
  subContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  desc: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  createdAt: {
    paddingTop: 10,
    maxHeight: 20,
  },
  titleBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textField: {
    margin: '10px auto 10px auto',
  },
  submit: {
    position: 'relative',
    marginTop: 20,
  },
  progress: {
    position: 'absolute',
  },
  closeButton: {
    position: 'absolute',
    left: '90%',
  },
};
