import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/Team/Team1.jpg'
import team2 from '../../assets/Team/Team2.jpg'

const Bannar = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [0, 100, 1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm rounded-lg shadow-2xl rounded-t-[50px] rounded-br-[50px] border-s-8 border-b-8 border-blue-500" alt="" />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm rounded-lg shadow-2xl rounded-t-[50px] rounded-br-[50px] border-s-8 border-b-8 border-blue-500" alt="" />

                </div>
                <div className='flex-1'>
                    <motion.h1 className="text-5xl font-bold">Remote <motion.span
                        // animate={{ color: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"] }
                        animate={{ color: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"], transition: { duration: 2, repeat: Infinity } }}
                        className="text-orange-500"
                    > Jobs</motion.span> For you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Bannar;