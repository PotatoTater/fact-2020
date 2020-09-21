import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UICard from '../../UIComponents/UICard'
import UIYoutubeEmbed from '../../UIComponents/UIYoutubeEmbed'

import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import ImageHeader from '../../components/Utils/ImageHeader'
import Footer from '../../components/Footer'

import styles from './styles.module.css'
import Image from 'react-bootstrap/Image'

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
           
             <Image src={"/img/bird-worded.png"} width="200" height="300"/>
            </center>
         </Section>
        )}
      </div>
    );
  }
}


const Event = ({ time, title, location, duration }) => (
 <div className='boxShadow' style={{
    background: `linear-gradient(215deg, rgba(249,186,169,1) 0%, rgba(88,164,149,1)  90%)`,
    borderRadius: '.3em',
    marginBottom: '.75em',
    marginTop: '.75em',
    padding: '.75em',
    marginLeft: '.1em',
    paddingTop: '.5em',
    minHeight: `${3.4 * duration}em`,
    display: 'flex'
 }}>
    <div style={{
      flex: 2
    }}>
      <p 
        className='fontCabin p-0 m-0 text-white'
        style={{
          fontWeight: 900,
          fontSize: '.9em',
          textAlign: 'right'
        }}
      >{time}</p>
    </div>
    <div style={{
      flex: 3,
      paddingLeft: '1em'
    }}>
      <p
        className='fontCabin p-0 m-0 text-white'
        style={{
          fontWeight: 600,
          fontSize: '1em',
          textAlign: 'left'
        }}
      >{title}</p>
      <p
        className='fontCabin p-0 m-0 text-white'
        style={{
          fontWeight: 300,
          fontSize: '1em',
          textAlign: 'left'
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
    <Col md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0}}>
    <Day day="Sunday, Nov. 8" events={[
      {
        time: "Time TBD",
        duration: 1,
        title: "Opening Session",
        location: "Location TBD",
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
    <Col md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0}}>
    <Day day="Friday, Nov. 13" events={[
      {
        time: "Time TBD",
        duration: 1,
        title: "Variety Show",
        location: "Location TBD",
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
                <p className='text-50' style={{textAlign: 'justify', marginBottom:'2em'}}>
                  We unite Filipino-Americans. The Filipino-Americans Coming Together (FACT) Conference has brought thousands of
                  Filipino-Americans together over its over 25 year old history. Delegates come from across the Midwest, America, and even from Canada to 
                  participate in FACT every year, creating lasting memories of their novel experiences
                  here at the University of Illinois at Urbana-Champaign. No matter the year and the theme, FACT always aims for delegates
                  to discover more about the Filipino-American identity through our various workshops and our variety show. Let us help you make
                  memories that will last a lifetime. </p>
                </center>
              </Col>
            </Row>
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
                      <center><Image src={"/img/bird.png"} width="200" height="300"/></center>
                      
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
                  <center><Image src={"/img/logo.PNG"} width="200" height="300"/></center>
                
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
        <Section.Title>Conference Agenda (WIP)</Section.Title>
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
