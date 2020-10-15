import React from 'react'
import styled from 'styled-components' 

const Session = styled.div`
  cursor: pointer;
  padding: .75em;
  background: white;
  border: 1px solid white;
  border-radius: 1em;
  transform: scale(.985);
  box-shadow: 0px 3px 5px 0px rgba(207,207,207,0.0);
  transition: 
    transform .3s ease-in-out, 
    border .3s ease-in-out,
    box-shadow .3s ease-in-out;
    background 1s ease-in-out;
  &:hover {
    transform: scale(1);
    border: 1px solid #EEEEEE;
    box-shadow: 0px 3px 5px 0px rgba(207,207,207,0.4);
    background: rgba(88,164,149,.1)
  }
`

const SessionHeader = styled.div`
  display: flex;
  flexDirection: row;
  @media (max-width: 768px) {
    display: table;
  }
`

const SessionId = styled.div`
  display: flex;
  background: linear-gradient(215deg, rgba(249,186,169,1) 0%, rgba(88,164,149,1)  90%);
  color: white;
  padding: 5px 20px;
  border-radius: .5em;
  font-size: 1.5em;
  font-family: 'Cabin';
  font-weight: 300;
  flex-grow: 0;
  flex-shrink: 0;
  @media (max-width: 768px) {
    display: inline-block;
  }
`

const WorkshopTitle = styled.h4`
  font-family: 'Playfair Display';
  font-weight: 100;
`

const WorkshopFacilitator = styled.h5`
  font-family: 'Cabin';
  font-weight: 700;
`

const WorkshopTime = styled.h6`
  font-family: 'Cabin';
  font-size: 1.2em;
  font-weight: 600;
`

const WorkshopDescription = styled.p`
  font-family: 'Cabin';
`

const AboutTheFacilitator = styled.span`
  font-family: 'Cabin';
  font-weight: 600;
  font-size: 1.5em;
`

const ToggleInfoButton = styled.div`
  display: flex;
  justify-content: center;
`

const WorkshopSession = ({ workshop }) => {
  const { isSelected } = workshop
  const description = workshop.description.length > 500 && !isSelected ? (
    `${workshop.description.substring(0, 500)}...` 
  ) : workshop.description

  const createMarkup = (text) => ({
    __html: text
  })

  const toggleInfoButtonMessage = isSelected ? (
    <div>
      <i style={{ color: 'rgba(249,186,169,1)', fontSize: '1.5em'}} class="fas fa-chevron-up"></i> 
    </div>
  ) : (
    <div>
      <i style={{ color: 'rgba(88,164,149,1)', fontSize: '1.5em'}} class="fas fa-chevron-down"></i>
    </div>
  )
  return (
    <Session className='mb-5' onClick={workshop.handleClick}>
      <SessionHeader>
        <SessionId className='text-center mb-3 mr-2 mt-0'>
          <span style={{
            alignSelf: 'center'
          }}>
            {workshop.id}
          </span>
        </SessionId>
        <div>
          <WorkshopTitle >
            {workshop.title}
          </WorkshopTitle>
          <WorkshopFacilitator className='text-black-50'>{workshop.name}</WorkshopFacilitator>
          <WorkshopTime className='text-black-50 mb-3'>{workshop.time}</WorkshopTime>
        </div>
      </SessionHeader> 
      <WorkshopDescription className='mb-4' dangerouslySetInnerHTML={createMarkup(description)}/>
      {
        isSelected && (
          <div className='mb-4'>
            <AboutTheFacilitator>About the Facilitator</AboutTheFacilitator>
            <div dangerouslySetInnerHTML={createMarkup(workshop.bio)}/>
          </div>
        )
      }
      <ToggleInfoButton>{toggleInfoButtonMessage}</ToggleInfoButton>
    </Session>
  )
}
export default WorkshopSession