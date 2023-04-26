

const Turn = () => {
  return (
    <>
    {/* <h1 style={{textAlign:'center'}}>Welcome to </h1> */}
    <img src="./src/assets/logo-no-bg.png" style={{maxWidth:'275px', display: 'block',marginLeft: 'auto', marginRight: 'auto', marginTop:'5px'}}/>
      <div className="container" style={{display:'flex', flexWrap:'wrap'}}>
  <div className="card" >
     <div className="card__image-container">
       <img className="card__image" src="./src/assets/shirt-ss.png" alt=""/>
    </div>
      
      <svg className="card__svg" viewBox="0 0 800 500">

        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#c1c7d0"/>
        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
      </svg>
    
     <div className="card__content">
     <img src="./src/assets/logo.png" style={{marginTop:'-20px'}}/>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
    </div>
  </div>
  <div className="card" style={{margin:'50px'}}>
     <div className="card__image-container">
       <img className="card__image" src="./src/assets/notes-ss.png" alt=""/>
    </div>
      
      <svg className="card__svg" viewBox="0 0 800 500">

        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#c1c7d0"/>
        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
      </svg>
    
     <div className="card__content">
     <img src="./src/assets/notes-logo.png"/>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
    </div>
  </div>
  <div className="card">
     <div className="card__image-container">
       <img className="card__image" src="./src/assets/hoffoto-ss.png" alt=""/>
    </div>
      
      <svg className="card__svg" viewBox="0 0 800 500">

        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#c1c7d0"/>
        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
      </svg>
    
     <div className="card__content">
       <img src="./src/assets/logo.png"/>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
    </div>
  </div>
</div>
    </>
  )
}

export default Turn
