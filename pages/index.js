import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack web developer based in Lagos, Nigeria!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Demilade Oyedele
                    </Heading>
                    <p>Software Engineer / Machine Learning Engineer / Technical Writer</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page