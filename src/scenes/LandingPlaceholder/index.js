import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UICard from '../../UIComponents/UICard'
import UIButton from '../../UIComponents/UIButton'
import UIYoutubeEmbed from '../../UIComponents/UIYoutubeEmbed'

import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import ImageHeader from '../../components/Utils/ImageHeader'
import Footer from '../../components/Footer'

import styles from './styles.module.css'
import Image from 'react-bootstrap/Image'
import Button  from 'react-bootstrap/Button';

class ImH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1370 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <div>
        {isDesktop ? (
          <Section style= {{marginTop: '5vh'}}>
            <ImageHeader imageURL='/img/banner.png'> 
            </ImageHeader>
          </Section>
        ) : (
          
          <Section class="main-image" style={{backgroundImage:'url(/img/newBridge.jpg)', backgroundSize: 'cover', marginTop: '8vh',}}>
            <center>
           
             <Image src={"/img/Bird-worded.png"} width="200" height="300"/>
            </center>
         </Section>
        )}
      </div>
    );
  }
}


const Event = ({ time, title, location, duration }) => (
 <div className='boxShadow--d-flex flex-column' style={{
    background: `linear-gradient(215deg, rgba(249,186,169,1) 0%, rgba(88,164,149,1)  90%)`,
    borderRadius: '.3em',
    marginBottom: '.75em',
    marginTop: '.75em',
    padding: '.75em',
    marginLeft: '.1em',
    paddingTop: '.7em',
    paddingBottom: '.7em',
    minHeight: `${3.4 * duration}em`,
    display: 'flex'
    
 }}>
    
    <div style={{
      flex: 3
    }}>
      
      <p 
        className='fontCabin p-0 m-0 text-white'
        style={{
          fontWeight: 900,
          fontSize: '1.2em',
          textAlign: 'center'
        }}
      >{title}</p>
      
    </div>
    
    <div style={{
      flex: 3,
     
    }}>
      <p
        className='fontCabin p-0 m-0 text-white'
        style={{
          fontWeight: 300,
          fontSize: '1em',
          textAlign: 'center'
        }}
    
      >{time}</p>
      </div>
    
    <div style={{
      flex: 3,
      
    }}>
      <p
        className='fontCabin p-0 m-0 text-white'
        style={{
          fontWeight: 300,
          fontSize: '1.1em',
          textAlign: 'center'
        }}
      >{location}</p>
    </div>
 </div>
)

const Day = ({ day, events }) => (
  <div style={{ marginBottom: '2em' }}>
  <h3 
    style={{
      fontWeight: 10,
      paddingBottom: '.5em'
    }}
    className='text-center fontCabin'
  >{day}</h3>
  {(events || []).map(event => (
    <Event {...event}/>
  ))}
  </div>

)
const Agenda = () => (
  <Row>
    <Col md={{ span: 12, offset: 0}} lg={{ span: 6, offset: 0}}>
    <Day day="Friday, Nov. 6" events={[
      {
        time: "3:00 - 7:00pm CST",
        duration: 1,
        title: "Virtual *Onsite* Registration",
        location: "Zoom",
      }
    ]}/>
    </Col>
    <Col md={{ span: 12, offset: 0}} lg={{ span: 6, offset: 0}}>
    <Day day="Saturday, Nov. 7" events={[
      {
        time: "3:00 - 7:00pm CST",
        duration: 1,
        title: "Virtual *Onsite* Registration",
        location: "Zoom",
      }
    ]}/>
    </Col>
    <Col md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0}}>
    <Day day="Sunday, Nov. 8" events={[
      {
        time: "7:00 - 9:00pm CST",
        duration: 1,
        title: "Opening Session",
        location: 
        <Button variant="outline-light" target="_blank" href="https://us02web.zoom.us/j/86894902548?pwd=eVUwYWFyT2ZJdUdZVUFRYmovaVBOQT09"
        style={{
          fontWeight: 500,
          paddingTop: '.6em',
          fontColor: 'rgba(241,164,232,0)'

        }}
        className='text-center fontCabin'>Click Here to Go To Opening Session!</Button>,
      }
    ]}/>
    </Col>
    <Col md={{ span: 12, offset: 0}} lg={{ span: 4, offset: 0}}>
    <Day day="Monday, Nov. 9" events={[
      {
        time: "3:00 - 7:00pm CST",
        duration: 1,
        title: "Session I",
        location: "Zoom",
      }
    ]}/>
    </Col>
    <Col md={{ span: 12, offset: 0}} lg={{ span: 4, offset: 0}}>
    <Day day="Tuesday, Nov. 10" events={[
      {
        time: "3:00 - 7:00pm CST",
        duration: 1,
        title: "Session II",
        location: "Zoom",
      }
    ]}/>
    </Col>
    <Col md={{ span: 12, offset: 0}} lg={{ span: 4, offset: 0}}>
    <Day day="Wed., Nov. 11" events={[
      {
        time: "3:00 - 7:00pm CST",
        duration: 1,
        title: "Session III",
        location: "Zoom",
      }
    ]}/>
    </Col>
    <Col md={{ span: 12, offset: 0}} lg={{ span: 12, offset: 0}}>
    <Day day="Thursday, Nov. 12" events={[
      
      {
        time: "3:00 - 6:00pm CST",
        duration: 1,
        title: "FACT Social & Networking  Session",
        location: <Button variant="outline-light" target="_blank" href="https://us02web.zoom.us/j/84818899525"
        style={{
          fontWeight: 500,
          paddingTop: '.6em',
          fontColor: 'rgba(241,164,232,0)'

        }}
        className='text-center fontCabin'>Come Meet and Chat With Us!</Button>,
      },
      {
        time: "3:00 - 7:00pm CST",
        duration: 1,
        title: "MAFAmily Day",
        location: "Zoom",
      },
      {
        time: "4:00 - 8:00pm CST",
        duration: 1,
        title: "Portillo's Fundraiser",
        location: "Portillo's @ Champaign",
      }
    ]}/>
    </Col>
    <Col md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0}}>
    <Day day="Friday, Nov. 13" events={[
      {
        time: "7:00 - 9:00pm CST",
        duration: 1,
        title: "Variety Show",
        location: "Youtube Live",
      }
    ]}/>
    </Col>
  </Row>
)
const Landing = () => (
  <>
    <Layout style={{
        backgroundColor: 'rgba(249,186,169,0.00)'
      }}  className={`animated fadeIn`}>
      <ImH></ImH>
    
      <Section style={{
        background: `
        linear-gradient(rgba(88,164,149,0)0%, rgba(241,164,232,0) 15%, rgba(241,164,232,0) 90%, rgba(249,186,169,0))
        `,
      }}>
        <Section.Title style={{}}>About</Section.Title>
        <Section.Body>
          <Container>
            <Row>
              <Col
                md={12}
                lg={{ span: 12, offset: 0}}
              >
                <center>
                <p className='text-50' style={{textAlign: 'justify', marginBottom:'2em', marginRight:'5vw', marginLeft:'5vw'}}>
                  We unite Filipino-Americans. The Filipino-Americans Coming Together (FACT) Conference has brought thousands of
                  Filipino-Americans together over its over 25 year old history. Delegates come from across the Midwest, America, and even from Canada to 
                  participate in FACT every year, creating lasting memories of their novel experiences
                  here at the University of Illinois at Urbana-Champaign. No matter the year and the theme, FACT always aims for delegates
                  to discover more about the Filipino-American identity through our various workshops and our variety show. Let us help you make
                  memories that will last a lifetime. </p>
                </center>
              </Col>
              <div class="col text-center">
              <Button variant="outline-dark" target="_blank" href="https://drive.google.com/file/d/1nL8lY9ZyBi97oiSjcjE9X4bAeohrNFM3/view?usp=sharing"
                       style={{
                        fontWeight: 600,
                        borderRadius: '10px',
                        border: '2px solid', 
                        fontColor: 'rgba(241,164,232,0)',
                        boxShadow: "5px 5px 0px rgba(46, 46, 46, 0.12)"
                      }}
                      className='text-center fontCabin'>
                        Check out the FACT Booklet!</Button>{' '}
               </div>
            </Row>
          </Container>
        </Section.Body>
      </Section>
      
      {/* <Section>
      <Section.Title style={{}}>Booklet</Section.Title>
        <Section.Body>
          <Container>
          <Row>
                  <Col lg={{ span: 12, offset: 0 }}>
                    <center>
                      <p className='text-50' style={{textAlign: 'justify', marginBottom:'2em', marginRight:'5vw', marginLeft:'5vw'}}>
                        Click the button below to check out our beautifully created booklet for this year's FACT conference! Check out the headliners, facilitators, and workshops, along with
                        merch links and more FACT information! We'll see you at FACT!
                      </p>
                      
                  </Col>
                </Row>
            
          </Container>
        </Section.Body>
      </Section> */}

      <Section >
        <Section.Body>
          <Container>
            <UICard>
              <UICard.Header>
                <UICard.Title>Session III Workshops!</UICard.Title>
                {/* <UICard.Subtitle>Nov 8th - Nov 10th</UICard.Subtitle> */}
              </UICard.Header>
              <UICard.Body>
               
                <Row>
                <div class="col text-center">
                  <center>
                  <p className='text-white p-2'  style={{ fontSize: '1.1em', fontFamily: "Cabin", textAlign: 'justify'}}>
                    To make things easier for our delegates, we have uploaded the Zoom links to the Session III workshops
                    in the workshops tab! Just click the workshop title and it will open a new tab to direct you to the
                    Zoom meeting! Enjoy the last session and don't forget to come to our networking session, buy some merch,
                    and watch V-Show!
                    
                    </p>
                  </center>
                </div>
                </Row>
                <Row>
                <div class="col text-center">
                    <Button variant="outline-light"  href="/workshops" 
                            style={{
                            fontWeight: 500,
                            borderRadius: '10px',
                            
                            fontColor: 'rgba(241,164,232,0)',
                            boxShadow: "5px 5px 5px rgba(46, 46, 46, 0.12)"
                          }}
                    className='text-center fontCabin' >Find Your Workshops!</Button>{' '}
                </div>
                {/* <div class="col text-left">          
                    <Button variant="outline-light" target="_blank" href="https://www.facebook.com/watch/?v=407863043927868" 
                            style={{
                            fontWeight: 500,
                            borderRadius: '10px',
                        
                            fontColor: 'rgba(241,164,232,0)',
                            boxShadow: "5px 5px 5px rgba(46, 46, 46, 0.12)",
                            alignItem: 'center'
                          }}
                    className='text-center fontCabin'>Attend Opening Session!</Button>{' '}
                </div>  */}
                  
                </Row>


              </UICard.Body>
            </UICard>
          </Container>
        </Section.Body>
      </Section>
      
      <Section>
        <Row style={{marginRight:0}}>
          <Col
            md={12}
            lg={{ span: 4, offset: 2}}
          >
            <Section>
            <Section.Title style={{}}>Theme</Section.Title>
              <Section.Body>
                <Container>
                      <center><Image src={"/img/Bird.png"} width="200" height="300"/></center>
                      
                      <p className='text-50' style={{textAlign: 'justify'}}>The UIUC Philippine Student Association proudly presents the theme for 
                      this year’s Filipino Americans Coming Together Conference; “Kalinangán: Power in Unity”. In Tagalog,
                      Kalinangán translates to “culture” or “civilization” in English, as culture is a uniting factor
                      that everyone shares and has the power to affect future generations.</p>

                      <p className='text-50' style={{textAlign: 'justify'}}>The Sarimanok bird represents the 
                      well-kept traditions and stories of Filipino culture, but it
                      also symbolizes the resilience of the bird in modern culture and art. It is known for having
                      colorful wings in popularized images originating from Mindanao ethnic art. The diversity
                      shown through the bird’s image emphasizes our conferences values in diversity,
                      expression, and strength in adversity.</p>
                </Container>
              </Section.Body>
            </Section>
          </Col>
            

          <Col
            md={12}
            lg={{span: 4, offset: 0}}
          >
            <Section>
            <Section.Title>Mission</Section.Title>
              <Section.Body>
                <Container>
                  <center><Image src={"/img/logo.png"} width="200" height="300"/></center>
                
                  <p className='text-50' style={{textAlign: 'justify'}}>
                  A movement is taking shape within our society and within each of us as we face the
                  challenges ahead. 2020 began with several historic events, tragedies, and significant
                  changes to the way we live and how we move forward as individuals.
                  </p>
                  <p className='text-50' style={{textAlign: 'justify'}}>
                  As Filipino Americans and other races and ethnicities take part in this conference, we would like to
                  echo to our delegates the foundations of working as a community to further educate and
                  engage with each other in meaningful ways to advance minority communities as a
                  whole. We believe that every individual can be an agent for change, and we can all act
                  in solidarity to bring light to issues that have long been dismissed.
                  </p>
                  <br></br>
                
                </Container>
            </Section.Body>
            </Section>
          </Col>
          
        </Row>
      </Section>

      <Section >
        <Section.Body>
          <Container>
            <UICard>
              <UICard.Header>
                <UICard.Title>Our Response to COVID-19</UICard.Title>
                {/* <UICard.Subtitle>Nov 8th - Nov 10th</UICard.Subtitle> */}
              </UICard.Header>
              <UICard.Body>
                <Row>
                  <Col lg={{ span: 6, offset: 3 }}>
                    <center>
                      <p className='text-white p-2'  style={{ fontSize: '1.1em', fontFamily: "Cabin", textAlign: 'justify'}}>
                        Due to concerns over COVID-19, it was decided that FACT would be converted to an online format this year for the health and safety of all particpants. We will be utilizing Zoom and other online resources to facilitate workshops and our events. We hope to provide the best experience for all FACT 2020 particpants using this format and we hope to see you there!
                      </p>
                    </center>
                  </Col>
                </Row>
              </UICard.Body>
            </UICard>
          </Container>
        </Section.Body>
      </Section>

      {/* <Section>
        <Section.Title></Section.Title>
        <Section.Body>
          <Container>
            <Row>
              <Col
                md={12}
                lg={{ span: 12, offset: 0}}
              >
                <center><Image src={"/img/logo2020.jpg"} width="200" height="300" className="center"/></center>
                
              </Col>
            </Row>
          </Container>
        </Section.Body> 
      </Section> */}

     
      <Section>
        <Section.Title>Conference Agenda</Section.Title>
        <Section.Body>
          <Container>
              <Col 
                className='mx-auto'
                md={12}
                lg={{ span: 10, offset: 1 }}
              >
                  <Agenda/>
                
              </Col>
          </Container>
        </Section.Body>
      </Section>

      
      {/* <Section>
        <Section.Title>Fact 2018 Recap</Section.Title>
        <Section.Body>
          <Container>
              <Col 
                className='mx-auto'
                md={12}
                lg={{ span: 10, offset: 1 }}
              >
                  <UIYoutubeEmbed videoId='k6pGrTnh5uQ'/>
                
              </Col>
          </Container>
        </Section.Body>
      </Section> */}
      <Footer/>
    </Layout>
  </>
)
export default Landing
