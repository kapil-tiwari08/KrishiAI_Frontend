import React from 'react';
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CCardFooter, CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
    return (
        <>
            <div className="flex-container">
                <CCarousel controls>
                    <CCarouselItem>
                        <CImage className="carousel-image" src="\img\istockphoto-1365693929-612x612.jpg" alt="slide 1" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className=" carousel-image" src="\img\240_F_548287601_cDg60eaqSP47OQGiJAbtGdN2MKAUhfSI.jpg" alt="slide 2" />
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="carousel-image" src="\img\240_F_651500572_dZbmqK6KXaXCyi0o5KvfixXx6P8EzDas.jpg" alt="slide 3" />
                    </CCarouselItem>
                </CCarousel>
            </div>

            <div className="section-title">OUR FEATURES AND SERVICES</div>

            <div className="card-grid">
                <CRow>
                    <CCol xs>
                        <CCard className="card">
                            <CCardImage orientation="top" src="\img\240_F_514399314_DlilbGPF4KoNr08wZLq7JAry2th3ZNBv.jpg" />
                            <CCardBody>
                                <CCardTitle className="card-title">CROP RECOMMENDATION</CCardTitle>
                                <CCardText>
                                A crop recommendation system uses NPK values (Nitrogen, Phosphorus, Potassium) to assess soil fertility and suggest suitable crops. It helps optimize crop selection for better yield and sustainability.
                                </CCardText>
                            </CCardBody>
                            <CCardFooter className="card-footer">
                                <small>Last updated 3 mins ago</small>
                            </CCardFooter>
                        </CCard>
                    </CCol>
                    <CCol xs>
                        <CCard className="card">
                            <CCardImage orientation="top" src="\img\240_F_530284602_j1sAccsNEhn9K3RFuxLe62o1MeItxHhs.jpg" />
                            <CCardBody>
                                <CCardTitle className="card-title">FERTILIZER RECOMMENDATION</CCardTitle>
                                <CCardText>
                                A fertilizer recommendation system suggests the optimal type and amount of fertilizer based on soil NPK values (Nitrogen, Phosphorus, Potassium) to enhance crop growth and improve soil health. 
                                </CCardText>
                            </CCardBody>
                            <CCardFooter className="card-footer">
                                <small>Last updated 3 mins ago</small>
                            </CCardFooter>
                        </CCard>
                    </CCol>
                    <CCol xs>
                        <CCard className="card">
                            <CCardImage orientation="top" src="\img\240_F_505106167_bNt2Zcb1yPHDrgwsOzeDAu7C1omydTCy.jpg" />
                            <CCardBody>
                                <CCardTitle className="card-title">CROP CLINIC</CCardTitle>
                                <CCardText>
                                A crop clinic is a service where farmers can diagnose plant health issues by consulting experts who provide recommendations for disease management, pest control, and soil health based on plant samples. 
                                </CCardText>
                            </CCardBody>
                            <CCardFooter className="card-footer">
                                <small>Last updated 3 mins ago</small>
                            </CCardFooter>
                        </CCard>
                    </CCol>
                    <CCol xs>
                        <CCard className="card">
                            <CCardImage orientation="top" src="\img\240_F_725825359_8S9LJtQEnEx4BKCfq6CH1ZsaxkP5St0e.jpg" />
                            <CCardBody>
                                <CCardTitle className="card-title">FARM CARE</CCardTitle>
                                <CCardText>
                                Farm care focuses on ensuring the well-being of livestock through proper nutrition, clean water, safe housing, and regular veterinary check-ups. It includes maintaining hygiene, disease prevention, and providing adequate space and shelter to promote healthy growth and productivity.
                                </CCardText>
                            </CCardBody>
                            <CCardFooter className="card-footer">
                                <small>Last updated 3 mins ago</small>
                            </CCardFooter>
                        </CCard>
                    </CCol>
                    
                    {/* Other cards go here */}

                </CRow>
            </div>

            <div className="carousel-container">
                <CCarousel controls indicators dark>
                    <CCarouselItem>
                        <CImage className="d-block w-100 carousel-image" src="\img\istockphoto-1280271119-612x612.jpg" alt="slide 1" />
                        <CCarouselCaption className="carousel-caption">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100 carousel-image" src="\img\istockphoto-1370318829-612x612.jpg" alt="slide 1" />
                        <CCarouselCaption className="carousel-caption">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100 carousel-image" src="\img\240_F_619720577_LWP5h6kF47NdRUsE3sQoiKhtb9sjsUcN.jpg" alt="slide 1" />
                        <CCarouselCaption className="carousel-caption">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>
                        <CImage className="d-block w-100 carousel-image" src="\img\240_F_619720577_LWP5h6kF47NdRUsE3sQoiKhtb9sjsUcN.jpg" alt="slide 1" />
                        <CCarouselCaption className="carousel-caption">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                    {/* Other carousel items */}

                </CCarousel>
            </div>
        </>
    );
}

export default Home;
