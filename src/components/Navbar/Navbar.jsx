import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import { motion } from 'framer-motion'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}><img className="logo" src="/logo.svg" alt="" /></motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                    <a href="#"><img src="/dribble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar