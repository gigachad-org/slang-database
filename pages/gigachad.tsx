import Head from "next/head"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export default function Gigachad() {
  return (
    <>
      <Head>
        <title>Gigachad</title>
        <meta name="description" content="Definition of gigachad slang word" />
        <link rel="icon" href="/dictionary.ico" />
      </Head>

      <Container>
        <Typography variant="h3" textAlign="center" mt="40vh">
          Gigachad
        </Typography>

        <Typography textAlign="center" mt="16px">
          It used to mean an extremly attractive man but now it means doing
          something daring and unexpected but still morally right. Or simply
          being very good at something.
        </Typography>
      </Container>
    </>
  )
}
