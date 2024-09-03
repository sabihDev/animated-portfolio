import { useRef } from 'react';
import './Services.scss'
import { motion, useInView } from 'framer-motion'

const variants ={
    initial:{
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate:{
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren:0.1,
        }
    }
};

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px"})
  return (
    <motion.div className='services' ref={ref} variants={variants} initial="initial" animate={isInView ? "animate" : "initial"}>
        <motion.div className="text-container" variants={variants}>
            <p>
                I focus on helping your brand grow
                <br /> and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className='title-container' variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className='list-container' variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni possimus odit laudantium eius dolorem. Voluptatum consectetur, quae eius quaerat ullam exercitationem nesciunt, quasi, et enim ea commodi odit eligendi sed.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, maxime incidunt. Cum illo sit nobis! Quibusdam, accusantium nobis ipsam odit tempora eum quo nesciunt doloremque, autem impedit quis, est tempore!
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic repellendus amet similique magnam ut ullam reiciendis eligendi maxime, ducimus delectus corrupti sapiente, pariatur vel. Dolor laboriosam hic molestiae quidem pariatur?
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit eum ullam suscipit error cumque voluptate iusto eligendi reprehenderit aut sapiente dicta, nihil exercitationem veritatis maxime aspernatur, dolore quis quisquam.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services