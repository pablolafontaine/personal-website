import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggle = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <IconButton aria-label="Toggle Theme"
        colorScheme={useColorModeValue('blue', 'yellow')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
        />
        
    )
}

export default ThemeToggle
