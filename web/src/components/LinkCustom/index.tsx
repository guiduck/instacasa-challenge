import React, { ReactNode } from 'react';
import Link from 'next/link'
import { Box, Flex } from '@chakra-ui/react';

interface IconTypeProps {
  color: string;
  fontSize: number
}

type IconType = (props: IconTypeProps) => JSX.Element;

type Props = {
  children: ReactNode,
  url: string
  icon?: IconType
}

const LinkCustom: React.FC<Props> = ({ children, url, icon }) => {
  return (
    <Link href={url}>
      <a target='_blank' >
        <Flex justifyContent='space-around'>
          <Box px={3}>
            {children}
          </Box>
          {React.createElement(icon, {color: 'white', fontSize: 24})}
        </Flex>
      </a>
    </Link>
  )
}

export default LinkCustom;