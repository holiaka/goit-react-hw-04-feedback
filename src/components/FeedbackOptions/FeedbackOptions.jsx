import PropTypes from "prop-types";
import { ButtonsWrapper, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arr = Object.keys(options);
  return (
    <ButtonsWrapper>
      {arr.map(item => (
        <Button key={item} type="button" name={item} onClick={() => onLeaveFeedback(item)}>
          {item[0].toUpperCase() + item.slice(1)}
        </Button>
      ))}
    </ButtonsWrapper>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
