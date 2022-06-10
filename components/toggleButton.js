import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ToggleButton = () => {
    const {toggleColorMode} = useColorMode()
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div style={{display: 'inline-block'}} key={useColorModeValue('light', 'dark')} initial={{x:-20}} animate={{x:0}} transition={{duration:0.2}}>
                <IconButton aria-label="Toggle Theme" colorScheme={useColorModeValue('facebook', 'yellow')} icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)} onClick={toggleColorMode}></IconButton>
            </motion.div>
        </AnimatePresence>

    )
}

export default ToggleButton