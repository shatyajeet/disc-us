/**
 * Created by shatyajeet on 08/06/16.
 */

import React from 'react';
import {Link} from 'react-router';

import styles from '../styles';

import AppBar from 'material-ui/AppBar';

const Navbar = () => (
  <AppBar
    showMenuIconButton={false}
    title={<Link style={styles.link} to="/">Disc-Us</Link>}
  />
);

export default Navbar;
