import React from 'react';
import PropTypes from 'prop-types';

import { FinderWrapper, PlaceHolder, Finder } from './Filter.styled';

export default function Filter({ value, onChange, onBlur }) {
  return (
    <FinderWrapper>
      <PlaceHolder>
        Find contacts by name
        <Finder type="text" value={value} onChange={onChange} onBlur={onBlur} />
      </PlaceHolder>
    </FinderWrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
