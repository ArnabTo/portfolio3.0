import { motion } from "framer-motion";
import AnimatePresence from "framer-motion"
const animation = {
    initial: {opacity:0, x:100},
    animate: {opacity:1, x:0},
    exit: {opacity:0, x:-100},

}
export default function PageAnimtaion(e){
    return(
        <AnimatePresence>
        <motion.div 
        variants={animation} 
        initial="initial"
        animate="animate" 
        exit="exit">
        {e}
        </motion.div>
        </AnimatePresence>
    )
}