import "./app.scss"
import { useState } from 'react';
// import Navbar from "./components/navbar/Navbar";
import { motion } from "framer-motion"
//to make use of the framer library, we use motion. whattever the label is

const Test = () => {


    const [open, setOpen] = useState(false)
    const variants = {
        visible: { opacity: 1 ,
            x:100,
            transition:{staggerChildren:0.2},
            duration:4},
        hidden: { opacity: 0 },
    }

    const items = [
        "item1", "item2", "item3", "item4"
    ]


    return (
        <div className="course">

            {/*<motion.div className="box"
                // variants={variants}
                // // initial="hidden"
                // // animate="visible"
                // transition={{ duration: 1 }}
                // animate={open ? "visible" : "hidden"}
    ></motion.div>*/}
            {/* <button onClick={() => setOpen(prev => !prev)}>Click</button> */}
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item)=>(
                    <motion.li variants={variants} key={item}>{item}</motion.li>
                ))}
                
            </motion.ul>
        </div>
    );
};

export default Test;