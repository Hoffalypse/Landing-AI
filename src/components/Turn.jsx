import { motion } from "framer-motion"

const Turn = () => {
  return (
    <body>
      {/* <h1 style={{textAlign:'center'}}>Welcome to </h1> */}
      <motion.div  
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      //   animate={{ rotateX: 360 }}
      //  transition={{ duration: 0.8, delay: 0.3 }}
    
>

      <img
        src="./src/assets/logo-no-bg.png"
        style={{
          maxWidth: "275px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      />
       <p className="choose"style={{fontStyle:"italic", textAlign:'center', fontSize:"18px", marginTop:'1px', marginLeft:"46px"}}> Choose Your Destiny</p>
      </motion.div>
     
      <div className="container" style={{ display: "flex", flexWrap: "wrap", marginTop:"-20px" }}>
        <a href="https://3d-shirt-design.netlify.app" className="card" style={{textDecoration:'none'}}>
          <div className="card__image-container">
            
              <img
                className="card__image"
                src="./src/assets/shirt-ss.png"
                alt="hoff-t"
              />
            
          </div>

          <svg className="card__svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#359fac"
            />
            <path
              className="card__line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="pink"
              strokeWidth="3"
              fill="transparent"
            />
          </svg>

          <div className="card__content">
            <img
              src="./src/assets/logo.png"
              style={{ marginTop: "-20px", width: "280px", marginLeft: "40px" }}
            />
            <p>
            Tired of the same boring t-shirts? Now design your own, using your own images or the help of AI! No need to wonder what it will look like on you, Hoff-T&apos;s Design will show you a 3d image of your shirt before getting it home and realizing it&apos;s all wrong.
            </p>
          </div>
        </a>
        <a href="https://hoffnotes.netlify.app" className="card" style={{ margin: "50px", textDecoration:'none' }}>
          <div className="card__image-container">
           
            <img
              className="card__image"
              src="./src/assets/notes-ss.png"
              alt="hoffnotes"
            />
          </div>

          <svg className="card__svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#359fac"
            />
            <path
              className="card__line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="pink"
              strokeWidth="3"
              fill="transparent"
            />
          </svg>

          <div className="card__content">
            <img src="./src/assets/notes-logo.png" />
            <p>
              Tired of skimming through articles to get to the point? Don&apos;t have all moring to sit and read? AI is here to help. Take any webpage, upload to HoffNotes and within seconds you will recieve a concise summary of the article in a length of your choosing.  
            </p>
          </div>
        </a>
        <a href="https://hoffoto.netlify.app" className="card" style={{textDecoration:'none'}}>
          <div className="card__image-container">
            <img
              className="card__image"
              src="./src/assets/hoffoto-ss.png"
              alt="hoffoto"
            />
          </div>

          <svg className="card__svg" viewBox="0 0 800 500">
            <path
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
              stroke="transparent"
              fill="#359fac"
            />
            <path
              className="card__line"
              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
              stroke="pink"
              strokeWidth="3"
              fill="transparent"
            />
          </svg>

          <div className="card__content">
            <img
              src="./src/assets/otto.png"
              style={{ width: "240px", marginLeft: "50px", marginTop: "-15px" }}
            />
            <p>
              Ever wish Picasso had done a painting of your favorite movie star? Want your very own Banksy image drawn with your ideas? Hoffoto with the help of DALL-E AI can make all your image creation dreams come true. When you make the perfect image, share with the world to see! 
            </p>
          </div>
        </a>
      </div>
      <p style={{textAlign:'center', marginTop:'50px'}}> &copy; HoffTech Solutions 2023</p>
    </body>
  );
};

export default Turn;
