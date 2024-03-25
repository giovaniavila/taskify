import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import InputTask from "../components/InputTask";
import ButtonAddTask from "../components/ButtonAddTask";

const Todo = () => {
  return (
    <Grid h="100vh" templateColumns="1fr" placeContent="center">
      <GridItem
        boxShadow="lg"
        p="6"
        rounded="md"
        bg="white"
        placeSelf="center"
        w="500px"
      >
        <Center>
          <Grid display="flex" flexDirection="column">
            <GridItem>
              <Box display="flex" gap="10px">
                <ButtonAddTask />
              </Box>
            </GridItem>
          </Grid>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Todo;
