import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react"

const SkillTag = ({ children, color, icon }) => {
    return (
        <Tag
            colorScheme={color}
            size={{ sm: "sm", md: "lg" }}
            m={1}
        >
            <TagLeftIcon as={icon} />
            <TagLabel>{children}</TagLabel>
        </Tag>
    )
}

export default SkillTag