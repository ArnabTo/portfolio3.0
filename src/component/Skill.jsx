import { motion } from "framer-motion"
export default function Skill() {
    return (
        <div>
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                exit={{ x: window.innerHeight }}
                className="skills" id="skill">
                <h1 className="skill-head"><u>SKILLS</u></h1>
                <div className="container">
                    <div className="row">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0, borderRadius: 15 }}
                            exit={{ opacity: 0, x: 100, transition: { duration: 0.4 } }}
                            className="container-wraper-skill">
                            <div className="bar-container">
                                <motion.div whileHover={{ scale: 1.1 }} className="skill" >
                                    <div className="skill-name">HTML</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="95%" style={{ maxWidth: "95%" }}></div>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.1 }} className="skill" >
                                    <div className="skill-name">CSS</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="90%" style={{ maxWidth: "90%" }}></div>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                    <div className="skill-name">Javascript</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="65%" style={{ maxWidth: "65%" }}></div>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                    <div className="skill-name">Bootstrap</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="80%" style={{ maxWidth: "80%" }}></div>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                    <div className="skill-name">Tailwind CSS</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="50%" style={{ maxWidth: "50%" }}></div>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                    <div className="skill-name">React Js</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="70%" style={{ maxWidth: "70%" }}></div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}