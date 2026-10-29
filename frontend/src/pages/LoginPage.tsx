import { Anchor, Button, Paper, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core'

export function LoginPage() {
  return (
    <Paper withBorder shadow="md" p="xl" radius="md" w="100%" maw={400}>
      <Text c="blue" fw={700} size="sm">Clínica Médica</Text>
      <Title order={2}>Entrar</Title>
      <Text c="dimmed" size="sm" mb="lg">Acesse com seu CPF e senha</Text>

      <form>
        <Stack>
          <TextInput label="CPF" placeholder="Somente números" />
          <PasswordInput label="Senha" placeholder="Sua senha" />

          <Button type="submit">Entrar</Button>

          <Text size="sm" ta="center">
            Ainda não tem conta? <Anchor href="#">Cadastre-se</Anchor>
          </Text>
        </Stack>
      </form>
    </Paper>
  )
}
