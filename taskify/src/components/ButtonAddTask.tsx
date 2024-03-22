import React from "react";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Input,
  Table,
} from "@chakra-ui/react";

const ButtonAddTask = () => {
  const [task, setTask] = React.useState<string[]>([]);
  const [inputTask, setInputTask] = React.useState<string>("");

  const adicionarTask = () => {
    setTask((task) => [...task, inputTask]);
    setInputTask("");
  };

  return (
    <Grid>
      <GridItem>
        <Center>
          <Box display="flex" gap="20px">
            <Input
              type="text"
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
            />
            <Button onClick={adicionarTask} colorScheme="blue">
              +
            </Button>
          </Box>
        </Center>
        <Table>
          {task.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </Table>
      </GridItem>
    </Grid>
  );
};

export default ButtonAddTask;
