import React from 'react'
import classNames from 'classnames'

import Card from 'react-bootstrap/Card'

import styles from './UICard.module.css'

const DEFAULT_BACKGROUND = `linear-gradient(215deg, rgba(249,186,169,1) 10%, rgba(88,164,149,1) 99%)`

const UICard = ({ background, children, className, ...rest }) => (
  <Card 
    style={{
      background: background ? background : DEFAULT_BACKGROUND,
    }}
    className={
      classNames('py-2 boxShadow', styles.card, className)
    } 
    {...rest}
  >
    <Card.Body>
      {children}
    </Card.Body>
  </Card>
)

UICard.Header = ({ children, className, ...rest }) => (
  <div 
    className={classNames('pb-3 text-white', className)} 
    {...rest}
  >
    {children}
  </div>
)
UICard.Title = ({ children, className, ...rest }) => (
  <h1 
    className={classNames(
      'text-center letterSpacing animated fadeIn fontPlayfair',
      className
    )}
    {...rest}
  >
    {children}</h1>
)

UICard.Subtitle = ({ children, className, ...rest }) => (
  <h4 
    className={classNames(
      'text-center letterSpacing animated fadeIn fontRoboto',
      className
    )}
    {...rest}
  >
    {children}
  </h4>
)

UICard.Body = ({ children }) => (
  <div>
    {children}
  </div>
)
export default UICard