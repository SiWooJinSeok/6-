import styled from 'styled-components';

import { ButtonBox } from './Share';

const DisabledAskQuestionButton = function ({ text, width }) {
  return <Wrapper width={width}>{text}</Wrapper>;
};

const Wrapper = styled(ButtonBox)`
  border: none;
  background: #c7bbb5;
  color: #fff;

  width: ${(props) => (props.width ? props.width : 'auto')};

  @media (max-width: 767px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export default DisabledAskQuestionButton;
