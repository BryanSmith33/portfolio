import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { updateFontFamily } from '../helpers/setNavFont'

const Nav = styled.nav`
  background:rgba(15, 13, 16, .90);
  margin-bottom: 1.45rem;
  padding:1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`

const NavLink = styled.li`
  margin: 0;
  padding: 0 .5em;
`

class Header extends Component {
  render() {
    const { siteTitle } = this.props
    return (
      <Nav>
        <span style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}>
            {siteTitle}
          </Link>
        </span>
        <NavLinks>
          <NavLink>About</NavLink>
          <NavLink>Work</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Blog</NavLink>
        </NavLinks>
      </Nav>
    )
  }
}

export default Header
