import React from "react";
import {Button, Container, Stack, Text} from "@chakra-ui/react";

/* Samuel Green Available to Walk That sounds great. I’d be happy with that. Could you send over some pictures of your dog, please? Here are a few pictures. She’s a happy girl! Can you make it? She looks so happy! The time we discussed works. How long shall I take her out for? 30 minute walk $29 1 hour walk $49 Type a message…   */
const App: React.FC = () => {
  return (
    <Stack backgroundColor="primary.50" flex={1} height={["auto", "100vh"]} justifyContent="center">
      <Stack
        bgGradient="linear(to-b,primary.900, primary.700)"
        borderBottomLeftRadius={"50% 30%"}
        borderBottomRightRadius={"50% 40%"}
        h={"90vh"}
        left={-16}
        position="absolute"
        top={0}
        w={96}
      />
      <Stack
        alignSelf="center"
        direction={["column", "row"]}
        maxWidth="container.sm"
        spacing={12}
        zIndex="100"
      >
        <Stack
          backgroundColor="primary.50"
          borderColor="white"
          borderRadius="3xl"
          borderWidth={8}
          boxShadow="2px 6px 8px 8px rgba(200,200,200,.5);"
          flex="1"
          h={["40vh", "65vh"]}
          justifyContent="center"
        >
          <Stack
            bgGradient="linear(to-l,primary.900, primary.700)"
            borderBottomRadius="md"
            borderTopRadius="2xl"
            flex="2"
          />
          <Stack flex="8" />
        </Stack>
        <Stack alignSelf="center" flex="2" justifyContent="center" textAlign={["center", "left"]}>
          <Text color="primary.400" fontSize="3xl" fontWeight="500">
            Simple booking
          </Text>

          <Stack direction="row">
            <Text color="primary.200" fontSize="sm" lineHeight={["inherit", "1.6"]}>
              Stay in touch with our dog walkers through the chat interface. This makes it easy to
              discuss arrangements and make bookings. Once the walk has been completed you can rate
              your walker and book again all through the chat.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
