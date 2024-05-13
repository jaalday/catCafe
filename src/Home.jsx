import './App.css'
import Cats from './Cats'
import About from './About'




function Home() {


  return (
    <>
    <div className='container'>
      <img  className="img"src="https://assets.goaaa.com/image/upload/c_fill,g_auto,w_1170,h_593,q_auto:best/v1647564576/singularity-migrated-images/kittea-cafe-san-francisco-cat-cafe-west-via-magazine.jpg.jpg"/>
      <div className='titleMain'>
    <h1 >The Cat Cafe</h1>
    <p className='para'>Where cats and coffee come together</p>
    </div>
    </div>
    <Cats/>
    <About/>
  
    
 
    </>
  )
}

export default Home
