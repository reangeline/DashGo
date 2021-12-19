import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile ({showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
      {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Renato Saraiva Angeline</Text>
        <Text color="gray.300" fontSize="small">reangeline@hotmail.com</Text>
      </Box>)}

      <Avatar size="md" name="Renato Saraiva" src="https://github.com/reangeline.png" />
    </Flex>
  )
}