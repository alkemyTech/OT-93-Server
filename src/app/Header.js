import React from 'react';
import { Link } from 'react-router-dom';
import { authUser } from '../utils/index';
import { publicHeaderDataArray, privateHeaderDataArray } from '../utils/index'

const Header = () => {
  const publicLinks = publicHeaderDataArray
  const privateLinks = privateHeaderDataArray
  const userAuthenticated = authUser()
  const checkPath = (path) => {
    if (window.location.pathname === path) {
      return 'header-link-active'
    } else {
      return 'header-link'
    }
  }
  console.log(window.location.pathname === '/')
  return (
    <nav>
      {userAuthenticated ?
        privateLinks.map(link => {
          return <Link to={link.path} className={checkPath(link.path)}>{link.label}</Link>
        })
        : publicLinks.map(link => {
          return <Link to={link.path} className={checkPath(link.path)}>{link.label} </Link>
        })
      }
    </nav>
  );
}

export default Header;