import React from 'react'
import Navbar from '../../component/Navbar/Navbar'


// import CSS
import './Home.css'
import First from '../../slides/First/First'
import Second from '../../slides/Second/Second'
import Third from '../../slides/Third/Third'
import Fourth from '../../slides/Fourth/Fourth'
import Footer from '../../component/Footer/Footer'



const Home = () => {



    return (
        <div>
            <div className=''>
                <Navbar />
                <First />
                <Second/>
                <Third/>
                <Fourth/>
                <Footer/>
            </div>

        </div>
    )
}

export default Home