import { Heading, Flex, Box, Image } from "@chakra-ui/react";
import editIcon from "../assets/edit.svg";
import trashIcon from "../assets/trash.svg";

interface CardTaskProps {
  tarefa: string;
}

const CardTask: React.FC<CardTaskProps> = ({ tarefa }) => {
  return (
    <Box display="flex" gap="20px" justifyContent="space-between">
      <Heading fontSize="sm" whiteSpace="pre-wrap">
        {tarefa}
      </Heading>
      <Flex justifyContent="space-between" gap="10px">
        <Image src={editIcon} alt="editar" />
        <Image src={trashIcon} alt="lixeira" />
      </Flex>
    </Box>
  );
};

export default CardTask;
