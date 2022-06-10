import { motion } from "framer-motion";

const animationConfig = {
    initial: { x:-50, opacity: 0 },
    animate: { x:0, opacity: 1 },
    exit: { x:50, opacity: 0 }
}

const Transitions = ({children}) => {
    return (
        <motion.div 
            variants= {animationConfig}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={({duration:0.5})}
        >
            {children}
        </motion.div>
    )
}

export default Transitions