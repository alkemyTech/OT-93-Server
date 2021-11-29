/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import '../css/Footer.css';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../utils/assets/LOGO.png';
import { getNavigationFooter, socialMediaInfo } from '../utils/selectors';
import { CONTACT, LOGO_ALT } from '../utils/constants';
import NewsLetterForm from '../Components/SubscriptionForm';
import { checkSubscription } from '../core/state/Session/actions';

const Footer = () => {
  const navigationItems = getNavigationFooter();
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(checkSubscription());
  }, []);

  const { NewsLetter } = useSelector((state) => state.login);

  return (
    <Container>
      <Row className="Border d-flex justify-content-center m-4">
        <Col className=" col-lg-5 linkFooter d-flex justify-content-around">
          <ul className="list-unstyled footer-navigation-list d-flex justify-content-around container-fluid">
            {map(navigationItems.slice(0, 3), (item, index) => (
              <li key={index}>
                <Link
                  className="text-decoration-none text-dark px-4"
                  to={item.url}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col className=" col-lg-2">
          <img className="footer-logo" alt={LOGO_ALT} src={logo} />
        </Col>
        <Col className=" col-lg-5 linkFooter d-flex justify-content-around">
          <ul className="list-unstyled footer-navigation-list d-flex justify-content-around container-fluid">
            {map(navigationItems.slice(3, 6), (item, index) => (
              <li key={index}>
                <Link className=" text-dark px-4" to={item.url}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row>{NewsLetter ? null : <NewsLetterForm />}</Row>
      <Row>
        <Col className="col-lg-4 container-fluid  d-flex justify-content-evenly ">
          {map(socialMediaInfo, (item, index) => (
            <a
              key={index}
              className="text-decoration-none text-dark pb-3 pt-3"
              href={`https://${item.url} `}
              target="blank"
              rel="noopener noreferrer"
            >
              <abbr title={item.url}>
                <item.component className={`footer-icon ${item.className} `} />
              </abbr>
            </a>
          ))}
        </Col>
      </Row>
      <Row>
        <h6 className="pb-2 pt-2">{CONTACT}</h6>
      </Row>
    </Container>
  );
};

export default Footer;
