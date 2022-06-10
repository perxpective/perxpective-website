import { motion } from "framer-motion";

const animationConfig = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

const Transitions = ({children}) => {
    return (
        <motion.div 
            variants= {animationConfig}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={({duration:0.7})}
        >
            {children}
        </motion.div>
    )
}

export default Transitions