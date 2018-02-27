import PropTypes from 'prop-types';
import React from 'react';
import { Container as NBContainer } from 'native-base';

import styles from './styles';

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }
  return (
      <NBContainer style={containerStyles}>
        {children}
      </NBContainer>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
};

export default Container;
