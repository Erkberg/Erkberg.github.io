import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {

    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#252525'
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 16,
              
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <div>
                <img src="assets/icon_me.png" width="64px" height="64px" style={{ float:"left", marginRight: 16, marginBottom: 16, marginLeft: 24 }}/>
                <span style={{ fontSize: 20, float: "left", marginTop: 16 }}>Erik Schulze - Unity Game Developer</span>
              </div>
            </Link>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
