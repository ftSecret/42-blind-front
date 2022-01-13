import ThumbUpIcon from 'components/atoms/icons/ThumbUpIcon';
import styled from 'styled-components';
import { colors } from 'styles/theme';

type PropTypes = {
  is_good: boolean;
};

const GoodButton = styled(ThumbUpIcon)<PropTypes>`
  color: ${(props) => (props.is_good ? colors.red : colors.grey)};
  cursor: pointer;
`;

export default GoodButton;
