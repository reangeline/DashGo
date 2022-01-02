import { Button } from '@chakra-ui/button'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  OnPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  number,
  OnPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => OnPageChange(number)}
    >
      {number}
    </Button>
  )
}
