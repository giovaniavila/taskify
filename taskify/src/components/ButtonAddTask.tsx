import React from "react";
import { Box, Button, Center, Grid, GridItem, Input } from "@chakra-ui/react";

import CardTask from "./Cardtask.tsx";

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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          marginTop="20px"
          gap="15px"
        >
          {task.map((tarefa, index) => (
            <CardTask key={index} tarefa={tarefa} />
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ButtonAddTask;
