import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
export default function Home() {
    return (
        <>
            <motion.div className="home_Container">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    exit={{ x: window.innerHeight }}
                    className="home_wrapper">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0, scale: 1.3 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="text">
                        <h1 className="typing">Hi, There! 👋<br /><span>I'm Arnab Saha, I'm
                            a Front-end Webdeveloper</span></h1>
                        <div className="hire_Btn"><motion.div whileHover={{ scale: 1.1, backgroundColor: "#01ff01", color: "white" }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="h_btn"><NavLink whileHover={{ scale: 1.1, backgroundColor: "#01ff01", color: "white" }} to="/contact"> Hire Me!</NavLink></motion.div></div>
                    </motion.div>

                    <div className="social_Container" >
                        <div className="social_wrapper">
                            <motion.ul
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}>
                                <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}><a href="https://bit.ly/3yGMdWs"><i class="fa-brands fa-square-facebook"></i></a></motion.li>
                                <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}><a href="https://bit.ly/3CF3qQX"><i class="fa-brands fa-square-instagram"></i></a></motion.li>
                                <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}><a href="https://bit.ly/3Cww0UK"><i class="fa-brands fa-square-github"></i></a></motion.li>
                                <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}><a href="https://bit.ly/3yKkTGI"><i class="fa-brands fa-linkedin"></i></a></motion.li>
                            </motion.ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}