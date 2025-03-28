import React from 'react';
import './App.css';

function Hero() {
  return (
    <section className="hero">
      <h2>Welcome to my adventure</h2>
      <p>Join me as I explore new destinations around the world!</p>
    </section>
    
  );
}

function Post({ image, title, description, link }) {
  return (
   
    <article className="post">
      
      <img src={image} alt={title} width="250px" height="240px" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>View More</button>
      </a>
    </article>
  );
}


function Gallery() {
  const images = [
    { src: "https://th.bing.com/th/id/OIP.R8OzQ6g0nwCFc-Yw_7VkPgHaD4?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", text: "Bali" },
    { src: "https://www.wanderingsunsets.com/wp-content/uploads/2021/12/Enfamil-2-768x960.jpg", text: "Paris" },
    { src: "https://th.bing.com/th/id/OIP.nnWI3Jq0C8dwZtlm9XO54AHaE8?rs=1&pid=ImgDetMain", text: "Kyoto" },
    { src: "https://ihitthebutton.com/wp-content/uploads/2022/07/times-square-nyc-1-1536x864.jpg", text: "New York" },
    { src: "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2014/12/church-of-all-nations-scaled.jpg?fit=500%2C333&ssl=1", text: "Israel" },
    { src: "https://deih43ym53wif.cloudfront.net/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg", text: "Swiss Alps" },
  ];

  return (
    <section id="gallery" className="gallery"> 
      <h2>Travel Gallery</h2><br></br>
      <div className="gallery-images">
        {images.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={item.text} />
            <div className="hover-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}





function ContactForm() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form id="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

function App() {
  const posts = [
    {
      image: "https://media.timeout.com/images/105240189/image.jpg",
      title: "Exploring the Beaches of Bali",
      description: "Discover the serene beaches of Bali...",
      link: "https://youtu.be/b7eIvrGMqas",
    },
    {
      image: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
      title: "As pretty as Paris",
      description: "Paris is always a good idea...",
      link: "https://youtu.be/pUFRfs2jmIk",
    },
    {
      image: "https://www.tripsavvy.com/thmb/e5wZDX6HW-JmfA8Yu0KEbCZ3zLo=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-530105220-5c337bae46e0fb00012fcdfb.jpg",
      title: "The Mystical Temples of Kyoto",
      description: "Kyoto is home to some of the most beautiful temples in Japan...",
      link: "https://www.youtube.com/shorts/1D_E_i1GVtw?feature=share",
    },
    {
      image: "https://www.travelandleisure.com/thmb/JWO4CNVDNSR-aLDBT93jVlHV1DQ=/1800x1200/filters:fill(auto,1)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg",
      title: "New York's Adventure",
      description: "Explore the vibrant life of Times Square and Central Park.",
      link: "https://youtu.be/zoVeYTYQP98",
    },
    {
      image: "https://cdn.audleytravel.com/1400/999/60/15974558-jerusalem-israel.jpg",
      title: "The Israel",
      description: "Israel is a country of contrasts, where ancient history meets modern innovation, where diverse cultures coexist, and where spirituality and beauty abound.",
      link: "https://www.youtube.com/shorts/uAR4rRD5Px0?feature=share",
    },
    {
      image: "https://deih43ym53wif.cloudfront.net/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg",
      title: "Swiss Alps",
      description: "Switzerland is most often associated with the Alps.",
      link: "https://youtu.be/c4eKV9CyIXk",
    },
  ];

  return (
    <div>
      <header>
        <div className="logo">
          {/* Use a relative path for the logo image */}
          <img
            src="/travel logo.png"
            alt="travel"
            width="80px"
            height="80px"
          />
          <h1><b>My Travel Blog</b></h1>
        </div>
          {/* Video Background Section */}
      <div className="video-background">
        <video autoPlay muted loop id="video-background">
          <source src="/2169880-uhd_2560_1440_30fps.mp4" type="video/mp4"  width="100%" height="100%"/>
        </video>
      </div>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#vacation">Destinations</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      

    

      <Hero />

      <section id='vacation'><br></br>
  <h2 className="vacation-diaries-heading">Vacation Diaries</h2>
  <div className="posts">
    {posts.map((post, index) => (
      <Post
        key={index}
        image={post.image}
        title={post.title}
        description={post.description}
        link={post.link}
      />
    ))}
  </div>
</section>


      <Gallery />
      <ContactForm />
    </div>
  );
}

export default App;
