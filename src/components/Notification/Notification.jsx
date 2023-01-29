import PropTypes from 'prop-types';
import { StartMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return <StartMessage> {message}</StartMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
