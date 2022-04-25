import { Header, Form, Input, Link, FormButtton } from "../../components/index";
export default function SignIn() {
  return (
    <>
      <Header />
      <Form>
        <Input label="Email" inputType="text" />
        <Input label="Password" inputType="password"></Input>
        <footer>
          <Link>Não possuo cadastro</Link>
          <FormButtton>Entrar</FormButtton>
        </footer>
      </Form>
    </>
  );
}
