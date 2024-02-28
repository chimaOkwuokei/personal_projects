import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on developing solution
          <br /> for YOU!
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.png" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          {/* <button>WHAT I DO?</button> */}
        </div>
      </motion.div>
      <br />


      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>WHAT I DO</h2>
          
          <p>
           With over three years of expertise, I have some experience in web development, bringing web applications to life with a seamless blend of React, Typescript etc. Simultaneously, I'm deeply immersed in the world of machine learning, where I leverage Python, TensorFlow, and scikit-learn to develop and deploy innovative models<br/>
          My commitment to staying abreast of the latest technologies ensures that I not only meet but exceed industry standards in both web development and machine learning. I approach each project with an innovative mindset, applying problem-solving skills to deliver solutions that stand out. Collaboration is at the core of my work philosophy, and I thrive in dynamic, team-oriented environments.
          Continuous learning is a cornerstone of my career, allowing me to embrace emerging technologies and incorporate them into my projects. Whether you have a web development endeavor or are intrigued by the possibilities of machine learning, I invite you to connect with me. Let's embark on a journey of innovation and technology together!
           </p>
          
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Designing</h2>
          <br />
          <p>
          I make the most amazing of designs!
          </p>
          <br />
          <button>Go</button>
        </motion.div> */}
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Documenting</h2>
          <br />
          <p>
          Your complexity, my clarity—let's embark on a journey to document your creation together!
          </p>
          <br />
          <button>Go</button>
        </motion.div> */}
       
      </motion.div>
    </motion.div>
  );
};

export default Services;
