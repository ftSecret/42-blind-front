import ThumbUpIcon from 'components/atoms/icons/ThumbUpIcon';
import styled from 'styled-components';
import { preventDragStyle } from 'styles/mixin';
import { colors } from 'styles/theme';

type PropTypes = {
  is_good: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const GoodButton = ({ is_good, onClick }: PropTypes) => {
  return (
    <StyledButton onClick={onClick}>
      <GoodIcon is_good={is_good} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  all: unset;
`;

const GoodIcon = styled(ThumbUpIcon)<Omit<PropTypes, 'onClick'>>`
  color: ${(props) => (props.is_good ? colors.red : colors.grey)};
  cursor: pointer;
  ${preventDragStyle}
`;

export default GoodButton;
