import React from 'react';
import styled from 'styled-components';
import LanguageIcon from '@material-ui/icons/Language';
import LanguageHiddenMenu from './LanguageHiddenMenu';
import { connect, useDispatch } from 'react-redux';
import { createToggleLanguageHiddenMenu } from '../actions/actions';

const LanguageCmp = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 11px;
  border-radius: 13%;
  cursor: pointer;
`;

const StyledLanguageIcon = styled(LanguageIcon)`
  transform: scale(1.25);
`;

function Language(props) {
  const dispatch = useDispatch();

  const onHandleMenu = () => {
    dispatch(createToggleLanguageHiddenMenu());
  };

  return (
    <LanguageCmp onClick={onHandleMenu}>
      <StyledLanguageIcon />
      <LanguageHiddenMenu />
    </LanguageCmp>
  )
}

export default connect()(Language);

