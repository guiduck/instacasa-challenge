import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import React from 'react';

interface IconTypeProps {
  color: string;
  fontSize: number
}

type IconType = (props: IconTypeProps) => JSX.Element;

type Props = {
  value: string
  icon?: IconType
  size: number
}

const InputCustom: React.FC<Props> = ({ value, icon, size }) => {
  return (
    <InputGroup>
      <Input p='10px' m='10px'  borderRadius='4px' value={value} />
      <InputRightElement
        pointerEvents='none'
        mr={2} mt={2}
        children={React.createElement(icon, {color: 'gray.300', fontSize: size})}
      />
    </InputGroup>
  )
}

export default InputCustom;