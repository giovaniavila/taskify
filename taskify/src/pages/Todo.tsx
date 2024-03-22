import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import InputTask from "../components/InputTask";
import ButtonAddTask from "../components/ButtonAddTask";

const Todo = () => {
  return (
    <Grid h="100vh" templateColumns="1fr" placeContent="center">
      <GridItem>
        <Center>
          <Grid templateRows="repeat(4, 1fr)" gap="80px">
            <GridItem>
              <Box display="flex" gap="10px">
                <ButtonAddTask />
              </Box>
            </GridItem>
            <GridItem>
              <Box></Box>
            </GridItem>
          </Grid>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Todo;
