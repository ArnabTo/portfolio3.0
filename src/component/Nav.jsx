import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import "../App.css"
import { useState } from "react"

export default function Nav() {
    const [showNav, setshowNav] = useState(false);
    return (
        <motion.div initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:100, transition:{duration:0.5}}} >
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent d-block">
                <div className="nav_item_wraper d-flex  ">
                    <a className="navbar-brand" href="#">ARS DEV.</a>
                    <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}} className="menu_Button" onClick={() => setshowNav(!showNav)}>
                        <i className="fa-solid fa-bars"></i>
                    </motion.div>
                    <div className="nav_items" id={showNav ? "show-nav" : "nav_items"}>
                        <ul className="navbar-nav">
                            <motion.li whileHover={{scale:1.3}}  whileTap={{scale:0.8}} className="nav-item">
                                <NavLink className="nav-Navlink fs-5 text-light" to="/">
                                    <span><i className="fa-solid fa-house"></i></span>
                                    <span className="slider"></span>
                                </NavLink>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3}} whileTap={{scale:0.8}} className="nav-item">
                                <NavLink className="nav-Navlink fs-5 text-dark" to="/about">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <span className="slider"></span>
                                </NavLink>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3}} whileTap={{scale:0.8}} className="nav-item">
                                <NavLink className="nav-Navlink fs-5 text-dark" to="/skill">
                                    <span><i className="fa-solid fa-chart-simple"></i></span>
                                    <span className="slider"></span>
                                </NavLink>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3}} whileTap={{scale:0.8}} className="nav-item">
                                <NavLink className="nav-Navlink fs-5 text-dark" to="/project">
                                    <span><i className="fa-solid fa-diagram-project"></i></span>
                                    <span className="slider"></span>
                                </NavLink>
                            </motion.li>
                            <motion.li whileHover={{scale:1.3}} whileTap={{scale:0.8}} className="nav-item">
                                <NavLink className="nav-Navlink fs-5 text-dark" to="/contact">
                                    <span><i className="fa-solid fa-address-book"></i></span>
                                    <span className="slider"></span>
                                </NavLink>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </nav>

        </motion.div>
    )
}