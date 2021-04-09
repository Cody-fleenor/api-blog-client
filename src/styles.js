import { makeStyles } from '@material-ui/core/styles';
import HeaderBackground from './imgs/HeaderBackground.jpg';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${HeaderBackground})`,
        backgroundPosition: `center`
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
        float: `left`,
      },
      image: {
        marginLeft: '15px',
      },
}));

