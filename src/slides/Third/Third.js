import React, { useState } from 'react'
import CountUp from 'react-countup'
import Scroll from 'react-scroll-trigger'

const Third = () => {

    const [counter, setcounter] = useState(false)

    return (
        <div className='container  max-w-[1900px] py-[5px] my-10 text-[white] bg-[#2998e5] p-10'>

            <h1 className='md:flex justify-around font-bold text-4xl text-center my-3 '>About Our Company</h1>

            <Scroll onEnter={() => setcounter(true)} onExit={() => setcounter(false)}>

                <ul className='md:flex justify-around font-bold text-3xl '>
                    <li className='my-5 text-center'>{counter &&
                        <CountUp start={0} end={100} delay={0} duration={2} />}k+
                        <p className='text-xl'>People Hired</p></li>

                    <li className='my-5 text-center'>{counter &&
                        <CountUp start={0} end={50} delay={0} duration={2} />}+
                        <p className='text-xl'>Company We Have</p></li>

                    <li className='my-5 text-center'>{counter &&
                        <CountUp start={0} end={500} delay={0} duration={2} />}+

                        <p className='text-xl'>Consultant We Have</p></li>

                </ul>
            </Scroll>

        </div>
    )
}

export default Third