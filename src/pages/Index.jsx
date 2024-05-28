import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Update",
    description: "Stocks around the world have seen a significant rise today...",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Innovations 2023",
    description: "The latest advancements in technology are set to revolutionize...",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more articles as needed
];

const trendingArticles = [
  "Economic Outlook for 2023",
  "Top 10 Tech Startups to Watch",
  "Global Warming: What Can We Do?",
  // Add more trending articles as needed
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
        </HStack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3">
          <Heading size="md" mb={4}>Latest News</Heading>
          <Stack spacing={4}>
            {articles.map((article, index) => (
              <Flex key={index} p={4} borderWidth="1px" borderRadius="md">
                <Image src={article.imageUrl} alt={article.title} boxSize="150px" objectFit="cover" mr={4} />
                <Box>
                  <Heading size="sm">{article.title}</Heading>
                  <Text mt={2}>{article.description}</Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>

        <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>Trending</Heading>
          <VStack spacing={2} align="start">
            {trendingArticles.map((title, index) => (
              <Link key={index} href="#" color="blue.500">{title}</Link>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" mt={8} p={4} bg="gray.800" color="white" textAlign="center">
        <HStack spacing={4} justifyContent="center">
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;