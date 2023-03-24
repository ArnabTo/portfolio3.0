import { motion } from "framer-motion"
export default function Project() {
    return (
        <>
            <div className="project_Container">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    exit={{ x: window.innerHeight }}
                    className="project_wrapper">
                    <h2 className="project_header"><u>About</u></h2>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="projects">
                        <div className="row">
                            <motion.div animate={{ borderRadius: 10 }} whileHover={{ scale: 1.1, borderRadius: 15 }} className="project col-xl-4 col-lg-5 col-md-8">
                                <div className="proj_items_wraper">
                                    <a href="https://github.com/ArnabTo/portfolio3.0" className="effect">
                                        <div className="project_details">
                                            <div className="project_name">
                                                <u>portfolio3.0</u>
                                            </div>
                                            <div className="made_with">
                                                <motion.span animate={{ borderRadius: 10 }}>HTML</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>CSS</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>Bootstrap</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>Javascript</motion.span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0, borderRadius: 10 }}
                                exit={{ opacity: 0, x: 100 }}
                                whileHover={{ scale: 1.1, borderRadius: 15 }} className="project col-xl-4 col-lg-5 col-md-8">
                                <div className="proj_items_wraper">
                                    <a href="https://arnabto.github.io/portfolio2.0.github.io/" className="effect">
                                        <div className="project_details">
                                            <div className="project_name">
                                                <u>portfolio2.0.github.io</u>
                                            </div>
                                            <div className="made_with">
                                                <motion.span animate={{ borderRadius: 10 }}>HTML</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>CSS</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>Bootstrap</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>Javascript</motion.span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div animate={{ borderRadius: 10 }} whileHover={{ scale: 1.1, borderRadius: 15 }} className="project col-xl-4 col-lg-5 col-md-8">
                                <div className="proj_items_wraper">
                                    <a href="https://arnabto.github.io/Netflix-UI-Clone/" className="effect">
                                        <div className="project_details">
                                            <div className="project_name">
                                                <u>Netflix-UI-Clone</u>
                                            </div>
                                            <div className="made_with">
                                                <motion.span animate={{ borderRadius: 10 }}>HTML</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>CSS</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>Tailwind CSS</motion.span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="projects">
                        <div className="row">
                            <motion.div animate={{ borderRadius: 10 }} whileHover={{ scale: 1.1, borderRadius: 15 }} className="project col-xl-4 col-lg-5 col-md-8">
                                <div className="proj_items_wraper">
                                    <a href="https://arnabto.github.io/calcualtor.github.io/" className="effect">
                                        <div className="project_details">
                                            <div className="project_name">
                                                <u>calcualtor.github.io</u>
                                            </div>
                                            <div className="made_with">
                                                <motion.span animate={{ borderRadius: 10 }}>HTML</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>CSS</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>Javascript</motion.span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div animate={{ borderRadius: 10 }} whileHover={{ scale: 1.1, borderRadius: 15 }} className="project col-xl-4 col-lg-5 col-md-8">
                                <div className="proj_items_wraper">
                                    <a href="https://arnabto.github.io/react-business-card/" className="effect">
                                        <div className="project_details">
                                            <div className="project_name">
                                                <u>react-business-card</u>
                                            </div>
                                            <div className="made_with">
                                                <motion.span animate={{ borderRadius: 10 }}>HTML</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>CSS</motion.span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div animate={{ borderRadius: 10 }} whileHover={{ scale: 1.1, borderRadius: 15 }} className="project col-xl-4 col-lg-5 col-md-8">
                                <div className="proj_items_wraper">
                                    <a href="https://arnabto.github.io/paw-club/" className="effect">
                                        <div className="project_details">
                                            <div className="project_name">
                                                <u>paw-club-landing-page</u>
                                            </div>
                                            <div className="made_with">
                                                <motion.span animate={{ borderRadius: 10 }}>HTML</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>CSS</motion.span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="projects">
                        <div className="row">
                            <motion.div animate={{ borderRadius: 10 }} whileHover={{ scale: 1.1, borderRadius: 15 }} className="project col-xl-4 col-lg-5 col-md-8">
                                <div className="proj_items_wraper">
                                    <a href="https://arsdev.netlify.app/" className="effect">
                                        <div className="project_details">
                                            <div className="project_name">
                                                <u>ars-react-app</u>
                                            </div>
                                            <div className="made_with">
                                                <motion.span animate={{ borderRadius: 10 }}>HTML</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>CSS</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>Bootstrap</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>React Router</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>React Animated Cursor</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>Framer Motion</motion.span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div animate={{ borderRadius: 10 }} whileHover={{ scale: 1.1, borderRadius: 15 }} className="project col-xl-4 col-lg-5 col-md-8">
                                <div className="proj_items_wraper">
                                    <a href="https://arnabto.github.io/product-preview-card-component-main/" className="effect">
                                        <div className="project_details">
                                            <div className="project_name">
                                                <u>product-preview-card-component</u>
                                            </div>
                                            <div className="made_with">
                                                <motion.span animate={{ borderRadius: 10 }}>HTML</motion.span>
                                                <motion.span animate={{ borderRadius: 10 }}>CSS</motion.span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}