import { Carousel } from 'react-carousel-minimal';
import image1 from '../assets/img/h1.jpg';
import image2 from '../assets/img/h4.jpg';
import image3 from '../assets/img/h5.jpg';

const Hero= () => {
const data = [
    {
      image: image1,
      caption: "Florida"
    },
    {
      image:image2,
      caption: "Scotland"
    },
    {
      image:image3,
      caption: "Darjeeling"
    },
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  return (
      <div>
          <Carousel
            data={data}
            time={4000}
            width="100%"
            height="700px"
            margin= "0 0 20px 0"
            captionStyle={captionStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "700px",
              margin: "0 0 20px 0",
            }}
          />
          </div>
        
    
  );
}

export default Hero;