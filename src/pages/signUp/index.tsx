import { Form, Header, Input, Link, FormButtton } from "../../components";

export default function SignUp() {
  return (
    <>
      <Header />
      <Form component={"form"}>
        <Input label="Email" inputType="text" />
        <Input label="Password" inputType="password" />
        <Input label="Confirm your password" inputType="password" />
        <footer>
          <Link>Já possuo cadastro</Link>
          <FormButtton>Cadastrar</FormButtton>
        </footer>
      </Form>
    </>
  );
}
