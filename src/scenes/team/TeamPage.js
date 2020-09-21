import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import Footer from '../../components/Footer'
import Layout from '../../components/Utils/Layout'
import Section from '../../components/Utils/Section'
import TeamMember from './TeamMember'

const TeamPage = () => (
  <Layout style={{ paddingTop: '10vh', backgroundColor: 'rgba(249,186,169,0)'}}>
    <Section>
      <Section.Title style={{backgroundColor: 'rgba(249,186,169,0)'}}>Meet Our Team</Section.Title>
      <Section.Body>
        <Container>
          {/* <Col xs={12} md={{ span: 10, offset: 1}} className='mb-5' >
            <Image 
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              style={{ borderRadius: '1em'}} 
              src={`${process.env.PUBLIC_URL}/img/fact-pack/team.jpeg`} 
              fluid />
          </Col> */}
          <hr className='col-xs-8 offset-cs-2 col-sm-6 offset-sm-3 p-3'/>
          <TeamMember
            name='Joselle (Josie) Escobar'
            position='Co-Coordinator'
            year='Senior'
            major='Political Science'
            bio='Joselle is currently a senior studying Political Science and Criminology at UIUC. During her time at UIUC, she has served in the Philippine Student Association as Co-Cultural chair directing Filipino dance performances, Vice President- External, and currently serves as Co-Coordinator of the 2020 Filipino Americans Coming Together Conference in the Midwest. She is passionate about growing collegiate Fil-Am organizations and Asian-American cultural programming across universities in the Midwest. Along with her interest in the Fil-Am community, she wants to be involved with developing equitable public policies for marginalized communities in Illinois. Her professional experience includes working in several nonprofits such as Chicago Coalition for the Homeless, the New American Welcome Center at the University YMCA, and Unipro Chicago-Midwest. She was also chosen to participate in the Asian Americans Advancing Justice 2020 Youth Leadership Summit in September. Joselle currently serves as a Legislative Aide intern at State Representative Carol Ammons office serving the 103rd district of Illinois assisting with constituent services and policy research. As an upcoming senior, Joselle is looking forward to directing her first large-scale conference and inspiring young delegates within the Filipino/Asian American community to take action in solidarity with other minority communities in 2020 and beyond.'
            imageURL='/img/fact-pack/Josie.jpg'
          />
          <TeamMember
            name='Caitlyn Anonuevo'
            position='Co-Coordinator'
            year='Senior'
            major='Molecular and Cellular Biology'
            bio='Caitlyn Añonuevo is currently a Senior at the University of Illinois at Urbana-Champaign, and throughout the years, she has served as the past Philanthropy Chair, Team FACT Manager, and now FACT Co-Coordinator for the Philippine Student Association. By joining this organization, Caitlyn has realized the importance of educating herself on her Filipino roots and maintaining this connection throughout her life. With this year’s theme, Caitlyn would like to encourage delegates to welcome diversity and uplift one another in their respective communities and beyond. As FACT transitions online, Caitlyn is excited to take the conference to schools all around the nation and combine efforts in the current movements that are shaping society. In addition to UIUC&apos;s PSA, Caitlyn is a personal assistant for the Division of Disability Resources and Educational Services at UIUC, a hospital volunteer for the Carle Foundation Hospital, a peer mentor for MCB Leaders, and she is the President of the American Medical Women’s Association. In her free time, Caitlyn likes to bingewatch Netflix and spend time with her friends on campus. She will always be down to eat, whether it be tacos from a local taco truck or desserts from a bake shop. To balance her cravings, she enjoys living a life grounded in fitness, specifically lifting weights. Caitlyn looks forward to coordinating the first virtual online conference with her FACT Pack and co-chair, and more importantly, best friend.'
            imageURL='/img/fact-pack/Caitlyn.jpeg'
          />
          <TeamMember 
            name='Michael Baccay'
            position='Campus Ambassador'
            year='Senior'
            major='Economics'
            bio='Michael is a fun loving, easy-going guy in his last year for economics at U of I. An avid hobby enthusiasts with a vast variety of interests, Michael has interests ranging from yo-yos to playing the harmonica and saxophone. Always looking to make the best out of any situation, hit him up for video games or a game of chess. Michael also has a diverse media taste, enjoying both the NBA and whatever this season&apos;s anime is, as well as being a self-professed music omnivore, willing to listen to anything.'
            imageURL='/img/fact-pack/Michael.jpg'
          />
           <TeamMember 
            name='Melencio Jose P. Sanidad'
            position='Campus Ambassador'
            year='Junior'
            major='Undeclared - Chemistry/Integrated Biology'
            bio='Melencio has been involved with PSA since Freshman year and was also a part of last year&apos;s board as Alumni chair. Other than being involved with PSA he is also a blue belt in taekwondo and part of Illini Taekwondo. He was planning on transferring into Chemistry but has been enjoying his classes in Integrated Biology and second guessing his decision. He is looking forward to helping host the first online FACT and hopes you&apos;re as excited as him!
            '
            imageURL='/img/fact-pack/Melencio.jpg'
          />
          
          <TeamMember
            name='Jacob Olano'
            position='Hospitality'
            year='Senior'
            major='Civil Engineering'
            bio='As a rising senior in Civil Engineering, Jacob is specifically looking into structural engineering as his main discipline. In his free time, he likes to play basketball, video games, and chill with his friends. I am very excited to serve as Hospitality for FACT this year. Although FACT is limited due to COVID, Jacob is certain that FACT can be successful this year and the Filipino Spirit will be kept alive.'
            imageURL='/img/fact-pack/Jacob.jpeg'
          />
          <TeamMember 
            name='Jean Therese Carlos'
            position='Hospitality'
            year='Junior'
            major='Molecular and Cellular Biology '
            bio='Jean is a junior at UIUC currently studying MCB in the pre-med track. She enjoys sewing, crocheting, and knitting during her free time. She also love watching movies all the time. If you’re ever wondering what to get her as a present, you could never go wrong with chocolate. '
            imageURL='/img/fact-pack/Jean.jpeg'
          />
          <TeamMember
            name='Reggie (Reijhui Pagala)'
            position='Information Technology'
            year='Senior'
            major='Computer Engineering'
            bio='Reggie (Reijhui) is a junior in Computer Engineering. Going to high school at Lane Tech, he was part of their Filipino Club, Kapamilya Habang Buhay. After coming to the University of Illinois, he wanted to continue his involvement in the Filam community by joining its PSA. From dancing with Barkada to being a part of the AKA program, he&apos;s made many amazing memories with PSA. Now as information tech, he hopes to help make FACT a part of the delegates&apos; amazing memories, too.'
            imageURL='/img/fact-pack/Reggie.jpg'
          />
          <TeamMember
            name='Ronell Esquivel'
            position='Marketing'
            year='Senior'
            major='Molecular and Cellular Biology'
            bio='Ronell is a senior in Molecular and Cellular Biology with a Spanish minor. He is a first generation filipino student with aspirations on becoming a Physician; more specifically, a pediatrician. In his free time, Ronell likes to cook Filipino food, go out with his friends, and volunteer at a free clinic or at a hospital.'
            imageURL='/img/fact-pack/Ronell.jpg'
          />
          <TeamMember
            name='Myka Padilla'
            position='Marketing'
            year='Junior'
            major='Molecular and Cellular Biology with a Neuroscience Concentration'
            bio='Myka is interested in improving medicine to eradicate the social inequalities that prevent all people from receiving the same quality of healthcare. Inspired by the current pandemic, she is applying for research and pursuing a minor in Global Health. In her free time, you can find her representing the University of Illinois at Urbana-Champaign as a Student Alumni Ambassador and volunteering at Carle Hospital or Edward Hines Jr. VA Hospital. To unwind, Myka loves listening to podcasts, eating take-out, and spending quality time with her friends. She&apos;s excited to spend a whole week attending FACT and she hopes to see you all there too!'
            imageURL='/img/fact-pack/Myka.jpg'
          />
           <TeamMember
            name='Camille Adao'
            position='Marketing'
            year='Senior'
            major='Human Development and Family Studies'
            bio='Camille Adao is from Chicago and she has been in PSA since she was a freshman, and she has grown so much because of it. Over the years, she has started to grow more comfortable the more she was involved. From developing strong bonds with fellow peers in Barkada and being in FACT Pack, it is a great opportunity to give back to an organization that is a family to many. She and her co-chairs are excited to create the graphics you will see throughout the week of FACT!'
            imageURL='/img/fact-pack/Camille.jpeg'
          />
           <TeamMember
            name='Brion Nono'
            position='Media'
            year='Junior'
            major='Media and Cinema Studies'
            bio='David has been a part of UIUC’s PSA since his freshman year; former Athletic chair and a performer for Barkada of FACT 2018. Over the summer he interned at his father’s pharmaceutical company and took the DAT (Dental Admissions Test), placing in the top 0.1% in the nation. Now in his final year of college, he spends a lot of time alone in the library studying for his classes while he gets ready to leave for Dental school the next fall. David is currently an active brother of Lambda Phi Epsilon fraternity on campus, and likes to “destress” with his bros on the weekends. In his free time he likes to lift weights casually, but stopped serious bodybuilding due to a permanent spinal condition. His goal in the future is to own a dental practice and start a Research &amp; Development company to further improve and distribute dental technology.'
            imageURL='/img/fact-pack/Brion.jpg'
          />
          <TeamMember 
            name='Josh Domingo'
            position='Team FACT Manager'
            year='Junior'
            major='Architecture'
            bio='Josh has always been inspired to help and support other people, whether it&apos;s through volunteering, motivating others to reach their goals, or simply finding the time to be available for his friends and family. With architecture, he hopes to find himself improving the lives of many people with his designs. In his time in college so far, he has been involved with many student organizations that encourage Asian cultural heritage and bringing together the Asian community, especially with the Philippines Student Association. As one of the Team FACT Managers, he hopes to help bring together people of not only the Filipino community, but also the Asian-American community to experience more about Filipino culture. During his free time, he likes to workout, binge Avatar on Netflix and is always down to discover new places to eat.'
            imageURL='/img/fact-pack/Josh.png'
          />
          <TeamMember 
            name='Lorenzo Magnaye'
            position='Team FACT Manager'
            year='Junior'
            major='Materials Science and Engineering Minoring in Chemistry'
            bio='Lorenzo Magnaye, or Renzo, is a rising junior studying Materials Science and Engineering and also pursuing a minor in Chemistry. In the field of Materials Science, he is specifically interested in polymers because of their widespread applications.  He is also part of the Illinois Engineering Ambassadors, which is a professional outreach program sponsored by the university to inspire kids who are underrepresented in engineering fields to pursue engineering degrees. During his free time, he loves cooking food, baking bread and cookies, and binge-watching shows and the NBA. Despite the ongoing pandemic, he cannot wait for this year&apos;s conference as he is excited to meet and connect with new people. '
            imageURL='/img/fact-pack/Lorenzo.jpg'
          />
          
          <TeamMember 
            name='Alexandria Monsalud'
            position='Variety Show Coordinator'
            year='Junior'
            major='Media and Cinema Studies'
            bio='Being a former PSA FCN Coordinator and current PSA VPI and FACT V-Show Coordinator, Alexandria is always eager to work on projects that challenge her creativity. Her favorite thing about being innovative with her ideas is seeing the reactions her work elicits. She is excited to collaborate with her cos to make this year&apos;s Variety Show unique and exhilarating. When she has free time, she likes to try new hobbies. Her most recent hobby is rug making. '
            imageURL='/img/fact-pack/Alex.jpg'
          />


          <TeamMember 
            name='Jazmin Aguilar'
            position='Variety Show Coordinator'
            year='Senior'
            major='Industrial Design'
            bio='Jasmine held UIUC PSA’s co-cultural chair position in the year 2019 and helped lead Barkada to a first place victory at Battle of The Bamboo earlier this year. She is a member of the UIUC Odyssey, writing content that you can check out online. Jasmine illustrates and trims her during her free time. You might see her working as a hair stylist or a tattoo artist in the near future.'
            imageURL='/img/fact-pack/Jazmin.jpeg'
          />
          <TeamMember
            name='Dana Villamena'
            position='Variety Show Coordinator'
            year='Junior'
            major='Architecture'
            bio='From being just a shy member her freshman year to former Co-Publicity chair and now a part of Team FACT, PSA has given Dana so much love, opportunities, memories, friendships and a family that she knows will always be there for her. FACT has brought her closer to her Filipino roots and culture and wanted to be a part of the team that puts it together to give back and hopefully give that same impact to other delegates! Dana loves creativity and making things fun and different. She is very excited to be working with an amazing team to put together the Variety Show this year!! Some fun FACTs about Dana is that she loves One Direction, loves Italian sausage, can understand and speak Tagalog very well, and her goal is to eat at least 50 pieces of sushi by the end of the year!!! 😃'
            imageURL='/img/fact-pack/Dana.jpeg'
          />
          
        </Container>
      </Section.Body>
    </Section>
    <Footer/>
  </Layout>
  
)
export default TeamPage
