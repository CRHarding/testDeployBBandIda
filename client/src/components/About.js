import React from 'react';
import Header from './static/Header';
import { Container } from 'reactstrap';

const About = () => {
  return (
    <div>
      <Header />
      <br/>
      <br/>
      <Container align="center">
        <h1 className="about">About</h1>
        <div className="aboutme">
          <img className="jessImg"
               src="https://static1.squarespace.com/static/5912bcf8d482e9800e805be2/t/5b0c53bd575d1fdde9ab6506/1527534661293/IMGP1563-lr-39.jpg?format=1500w" 
               width={300}
          />
          <p>
            Jessica Dusel has been honing her craft for over two decades.
            Originally inspired and taught as a child by her grandmothers and
            sewing teacher Florence Peck, she furthered her knowledge in adulthood
            through an internship with Jess Audey at the Macy’s fashion incubator,
            and then graduating from Columbia in 2010.
          </p>
          <p>
            Launching BB&IDA in 2012, Jessica finally began to really show her
            individual sense of style and client relations. Cultivating an avid
            following in Chicago at trade shows and alt markets, Jessica
            identified her customer base and started to build her brand. In
            manufacturing she focuses on durable easy to wear pieces made with
            luxe and eco friendly fabrics for women of all sizes. In her bespoke
            items she entertains a larger degree of whimsy and personalization,
            truly working with her client to ensure the piece is not just a
            representation of their requirements but also a garment that showcases
            her style and ingenuity.
          </p>
          <p>
            Moving to a new home and studio in 2017, Jessica continues to create
            custom wear and release capsule collections in the greater Chicago
            area.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
