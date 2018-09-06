import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  background:rgba(15, 13, 16, .90);
  padding:1rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 2;
  font-family: 'Capsule X Pro Medium';
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`

const NavLink = styled(Link)`
  margin: 0;
  padding: 0 .5em;
  color: #fff;
  transition: color 1s;
  &:hover {
    color: #ff8686;
  }
`
const ExternalLink = styled.a`
  margin: 0;
  padding: 0 .5em;
  color: #fff;
  transition: color 1s;
  &:hover {
    color: #ff8686;
  }
`
const Header = ({ siteTitle }) => (
  < Nav >
    <span>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.6em'
        }}>
        {siteTitle}
      </Link>
    </span>
    <NavLinks>
      <NavLink to={`/work`} activeClassName="active">Work</NavLink>
      <NavLink to={`/contact`} activeClassName="active">Contact</NavLink>
      <ExternalLink target='_blank' href='https://frontamentals.com/' rel="noopener noreferrer">Blog</ExternalLink>
    </NavLinks>
  </Nav >
)

export default Header
