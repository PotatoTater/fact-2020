import React from 'react'

import Col from 'react-bootstrap/Col'

import styles from './styles.module.css'

const ImageHeader = ({ imageURL, children }) => {
  const image = {
    width:'100%',
    height:'800px',
    // marginTop: '55px',
    background: `linear-gradient(rgba(88,164,149,0)0%, rgba(30,30,30,0.0) 10%, rgba(30,30,30,0.0) 80%, rgba(88,164,149,1) 99%),
      no-repeat center url(${imageURL})
    `,
    backgroundSize: 'cover',
  }
  return (
    <div className={styles.background} style={image}>
      <Col md={12} className={`text-center fontMoam ${styles.titleContainer}`}>
        { children }
      </Col>
    </div>
  )
}
export default ImageHeader
