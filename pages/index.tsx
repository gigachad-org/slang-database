import Head from "next/head"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export default function Home() {
  return (
    <>
      <Head>
        <title>Slang Dictionary</title>
        <meta name="description" content="Definition of slang words" />
        <link rel="icon" href="/dictionary.ico" />
      </Head>

      <Container>
        <Typography variant="h3" textAlign="center" mt="45vh">
          Slang Dictionary
        </Typography>
      </Container>
    </>
  )
}
