import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: {
      50: "hsl(270, 20%, 96%)",
      100: "hsl(206, 6%, 79%)",
      200: "hsl(270, 7%, 64%)",
      300: "hsl(271, 15%, 43%)",
      400: "hsl(271, 36%, 24%)",
      500: "hsl(276, 100%, 81%)",
      600: "hsl(276, 55%, 52%)",
      700: "hsl(264, 100%, 61%)",
      800: "hsl(289, 100%, 72%)",
      900: "hsl(293, 100%, 63%)",
    },
  },
  sizes: {
    container: {
      xl: "1120px",
    },
  },
  fonts: {
    body: "Rubik",
    heading: "Rubik",
  },
  components: {},
});
