import React from "react";
import {
  Avatar,
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {BsChevronLeft, BsClock, BsThreeDotsVertical} from "react-icons/bs";

const LeftChat = ({text}: {text: string}) => {
  return (
    <Box
      bgColor="#ede5f4"
      borderBottomLeftRadius="md"
      borderBottomRightRadius="xl"
      borderTopRadius="xl"
      paddingX={2}
      paddingY={1}
      w={["75%", "80%"]}
    >
      <Text color="primary.600" fontSize={[10, "xs"]} lineHeight="1.4">
        {text}
      </Text>
    </Box>
  );
};
const pictures = [
  {id: 0, alt: "image", src: "/assets/dog-image-1.jpg"},
  {id: 1, alt: "image", src: "/assets/dog-image-2.jpg"},
  {id: 2, alt: "image", src: "/assets/dog-image-3.jpg"},
];
const Pictures = () => {
  return (
    <Stack alignSelf="flex-end" direction="row" paddingTop={1} spacing={3}>
      {pictures.map((pic) => (
        <Image
          key={pic.id}
          alt={pic.alt}
          borderRadius="lg"
          height={[10, 12]}
          src={pic.src}
          width={[10, 12]}
        />
      ))}
    </Stack>
  );
};
const RightChat = ({text}: {text: string}) => {
  return (
    <Box
      alignSelf="flex-end"
      bgColor="white"
      borderBottomLeftRadius="xl"
      borderBottomRightRadius="md"
      borderTopRadius="xl"
      maxW={40}
      paddingX={2}
      paddingY={1}
    >
      <Text color="primary.300" fontSize={[10, "xs"]} lineHeight="1.4">
        {text}
      </Text>
    </Box>
  );
};
const WalkPlan = ({price, walkDuration}: {price: number; walkDuration: string}) => {
  return (
    <Stack
      alignItems="center"
      bgGradient="linear(to-r,primary.900, primary.700)"
      borderBottomLeftRadius="md"
      borderBottomRightRadius="xl"
      borderTopRadius="xl"
      color="white"
      direction="row"
      justifyContent="space-between"
      paddingX={2}
      paddingY={[1, 2]}
      spacing={2}
      w="90%"
    >
      <Icon as={BsClock} color="white" fontSize="md" />
      <Text fontSize="xs" fontWeight="700" width="100%">
        {walkDuration} walk
      </Text>
      <Text fontSize="md" fontWeight="700">
        ${price}
      </Text>
    </Stack>
  );
};
const App: React.FC = () => {
  return (
    <Stack
      backgroundColor="primary.50"
      flex={1}
      height={["auto", "100vh"]}
      justifyContent="center"
      spacing={[12, 0]}
    >
      <Stack
        bgGradient="linear(to-b,primary.900, primary.700)"
        borderBottomLeftRadius={"50% 25%"}
        borderBottomRightRadius={"50% 45%"}
        h={["80vh", "94vh"]}
        left={[-60, -4]}
        position="absolute"
        top={0}
        w={96}
      />
      <Stack
        bgColor="#eeeeee"
        borderTopLeftRadius={"full"}
        borderTopRightRadius={"full"}
        bottom={0}
        h={["60vh", "94vh"]}
        position="absolute"
        right={-48}
        w={96}
      />
      <Stack
        alignSelf="center"
        direction={["column", "row"]}
        maxWidth={["100%", "container.md"]}
        spacing={[12, 0]}
        zIndex="100"
      >
        <Stack
          alignSelf={"center"}
          backgroundColor="primary.50"
          borderColor="white"
          borderRadius="3xl"
          borderWidth={8}
          boxShadow="2px 6px 8px 8px rgba(200,200,200,.5);"
          h={["86vh", "80vh"]}
          justifyContent="center"
          overflowY="hidden"
          spacing="0"
          w={[60, 64]}
        >
          <Stack
            bgGradient="linear(to-l,primary.900, primary.700)"
            borderBottomRadius="md"
            borderTopRadius="2xl"
            flex="2"
            spacing="0"
          >
            <Stack alignSelf="center" bg="white" borderBottomRadius="xl" h={[4, 5]} width={28} />
            <Stack
              alignItems="center"
              direction="row"
              flex="3"
              justifyContent="space-between"
              paddingX={1}
              spacing={0}
            >
              <Stack flex="1">
                <Icon as={BsChevronLeft} color="white" fontSize="md" />
              </Stack>
              <Stack flex="2">
                <Avatar name="Avatar" showBorder={true} size="sm" src="/assets/avatar.jpg" />
              </Stack>
              <Stack flex="6" spacing={0}>
                <Text color="white" fontSize="xs" fontWeight="700">
                  Samuel Green{" "}
                </Text>
                <Text color="white" fontSize="xs">
                  Available to Walk
                </Text>
              </Stack>
              <Stack flex="1">
                <Icon as={BsThreeDotsVertical} color="white" fontSize="md" />
              </Stack>
            </Stack>
          </Stack>
          <Stack flex="12" padding={2}>
            <LeftChat text="That sounds great. I’d be happy with that." />
            <LeftChat text="Could you send over some pictures of your dog, please?" />
            <Pictures />
            <RightChat text="Here are a few pictures. She’s a happy girl!" />
            <RightChat text="Can you make it?" />
            <LeftChat text=" She looks so happy! The time we discussed works. How long shall I take her out for?" />
            <WalkPlan price={29} walkDuration="30 minutes" />
            <WalkPlan price={49} walkDuration="1 hour" />
            <InputGroup size="md">
              <Input
                backgroundColor="white"
                borderRadius="full"
                focusBorderColor="primary.400"
                fontSize="xs"
                placeholder="Type a message…"
                type="text"
              />
              <InputRightElement>
                <Button
                  _hover={{bgColor: "primary.300"}}
                  bgColor="primary.400"
                  borderRadius="full"
                  color="white"
                  size="sm"
                >
                  {">"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Stack>
        <Stack
          alignSelf="center"
          flex="2"
          justifyContent="center"
          paddingBottom={[16, 0]}
          paddingLeft={[6, 28]}
          paddingRight={[6, 0]}
          spacing={[6, 6]}
          textAlign={["center", "left"]}
        >
          <Text color="primary.400" fontSize="3xl" fontWeight="500">
            Simple booking
          </Text>

          <Text color="primary.200" fontSize="sm" lineHeight={["1.8", "1.6"]}>
            Stay in touch with our dog walkers through the chat interface. This makes it easy to
            discuss arrangements and make bookings. Once the walk has been completed you can rate
            your walker and book again all through the chat.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
