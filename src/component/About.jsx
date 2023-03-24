import img from "../assets/about.jpg"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
export default function About() {
    return (
        <>
            <div className="about_Container">
                <motion.div className="about_wrapper"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    exit={{ x: window.innerHeight }}>
                    <h2 className="about_header"><u>About</u></h2>
                    <motion.div

                        className="abt_Item_wraper">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0, borderRadius: 20 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="about_me">
                            <div className="my_img">
                                <motion.img
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0, borderRadius: 20 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    src={img}></motion.img>
                            </div>
                            <motion.p animate={{ scale: 1.1 }}>
                                I am a Passionate <span>Front-End Web Developer</span> with experience of 3 years
                                in website template designing and Front-End Web Development. I've good experience in responsive design. So Just let me know about your project & let's start with work.
                                Coding and learning a new skill is my passion & tech is my favorite learning interest.
                                <ul>
                                    <header>➡My Specialaizations</header>
                                    <li>👉Web Development</li>
                                    <li>👉Responsive Design</li>
                                    <li>👉PSD TO HTML</li>
                                    <li>👉Front-end Development</li>
                                    <li> etc.</li>
                                </ul>
                                <div className="resume_Btn"><motion.div whileHover={{ scale: 1.1, backgroundColor: "#01ff01", color: "white" }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="r_btn"><a href="#" whileHover={{ scale: 1.1, backgroundColor: "#01ff01", color: "white" }}> Resume </a></motion.div></div>
                            </motion.p>

                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </>
    )
}