import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import { Card, Container } from "react-bootstrap";
import image1 from '../assets/image-daniel.jpg'
import image2 from '../assets/image-jonathan.jpg'
import image3 from '../assets/image-kira.jpg'
import image4 from '../assets/image-jeanette.jpg'
import image5 from '../assets/image-patrick.jpg'


function FrontCards() {
  let  dani = image1
  let jonathan = image2
  let kaira = image3
  let jeanette = image4 
  let patrick = image5
  return (
    <div className="cards">
      <Container className="container_card">
        <div className="card_1">
          <Card className="card_one">
            <Container>
              <div className="top">
                <div className="img_d">
                  <img src={dani} className="dani"/>
                </div>
                <div className="name">
                  <h4>Daniel Clifford</h4>
                  <p>Verified Graduate</p>
                </div>
              </div>
              <div className="para_top">
                <div className="para_one">
                  <p>
                    i Recieve a joboffer mid-course, and the subjects I learned
                    were current,ifnot more so,in the company I joined.Ihonestly
                    feel I got every Penny's Worth
                  </p>
                </div>
                <div className="para_two">
                  <p>
                    "i Recieve a joboffer mid-course, and the subjects I learned
                    were current,ifnot more so,in the company I joined.Ihonestly
                    feel I got every Penny's Worth"
                  </p>
                </div>
              </div>
            </Container>
          </Card>
        </div>

        <div className="card_2">
          <Card className="card_two">
            <Container>
              <div className="top2">
                <div className="img__two">
                  <img src={jonathan}  className="jonathan"/>
                  <div className="name_two">
                    <h4>Jonathan Walters</h4>
                    <p>Verified Graduates</p>
                  </div>
                </div>
                <div className="card_2_para_top">
                  <div className="card_2_para_one">
                    <p>The team was very supportive and kept me motivated</p>
                  </div>
                  <div className="card_2_para_two">
                    <p>
                      "I started as a total newbie with virtually no coding
                      skills. I now work as a mobile engineer for a big compnay.
                      This was one of the best Investments I've Mase in myself."
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </Card>
        </div>

        <div className="card_3">
          <Card className="card_three">
            <Container>
              <div className="top3">
                <div className="img_three">
                  <img src={kaira} className="kaira" />
                </div>
                <div className="name_three">
                  <h4>Kira Whitie</h4>
                  <p>Verified Graduate</p>
                </div>
              </div>
              <div className="card_3_para_top">
                <div className="card_3_para_one">
                  <p>Such a life-Changing experience.Highly recomended!</p>
                </div>
                <div className="card_3_para_Two">
                  <p>
                    "i Recieve a joboffer mid-course, and the subjects I learned
                    were current,ifnot more so,in the company I joined.Ihonestly
                    feel I got every Penny's Worth i Recieve a joboffer
                    mid-course, and the subjects I learned were current,ifnot
                    more so,in the company I joined.Ihonestly feel I got every
                    Penny's Worthi Recieve a joboffer mid-course, and the
                    subjects I learned were current,ifnot more so,in the company
                    I joined.Ihonestly feel I got every Penny's Worthi Recieve a
                    joboffer mid-course, and the subjects I learned were
                    and the subjects I learned wereand the subjects I learned were
                    current,ifnot more so,in the company I joined.Ihonestly feel  ."
                  </p>
                </div>
              </div>
            </Container>
          </Card>
        </div>

        <div className="card_4">
          <Card className="card_four">
            <Container>
              <div className="top4">
                <div className="img_four">
                  <img src={jeanette} className="jeanette" />
                  <div className="name_four">
                    <h4>Jeanette Harmon</h4>
                    <p>Verified Graduates</p>
                  </div>
                </div>
                <div className="card_4_para_top">
                  <div className="card_4_para_one">
                    <p>An overall wonderfull and rewarding experience</p>
                  </div>
                  <div className="card_4_para_two">
                    <p>
                      "I started as a total newbie with virtually no coding
                      skills. I now work as a mobile engineer for a big
                      compnay."
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </Card>
        </div>
        <div className="card_5">
          <Card className="card_five">
            <Container>
              <div className="top5">
                <div className="img_five">
                  <img src={patrick} className="patrick" />
                </div>
                <div className="name_five">
                  <h4>Patrick Abrams</h4>
                  <p>Verified Graduate</p>
                </div>
              </div>
              <div className="card_5_para_top">
                <div className="card_5_para_one">
                  <p>
                    i Recieve a joboffer mid-course, and the subjects I learned
                    were current,ifnot more so,in the company I joined.Ihonestly
                    feel I got every Penny's Worth
                  </p>
                </div>
                <div className="card_5_para_two">
                  <p>
                    "i Recieve a joboffer mid-course, and the subjects I learned
                    were current,ifnot more so,in the company I joined.Ihonestly
                    feel I got every Penny's Worth"
                  </p>
                </div>
              </div>
            </Container>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default FrontCards;
