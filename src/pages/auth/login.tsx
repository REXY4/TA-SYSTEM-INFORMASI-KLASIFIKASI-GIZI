import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import Layout from 'Layouts';
import Auth, { Group } from 'components/Auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AuthUseCase from 'use-case/auth.action';

export default function Login() {
  const { login, isLogin } = AuthUseCase();
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const router = useRouter();
  const handleLogin = async () => {
    await login(form.email, form.password);
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (sessionStorage.getItem('_token')) {
      router.replace("/dashboard");
    }
  }, [isLogin]);

  return (
    <Layout title="Login" res={undefined}>
      <Auth title="Login" subTitle="">
        <form>
          <InputGroup fullWidth>
            <input type="text" name="email" onChange={onChange} placeholder="Username" />
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" name="password" onChange={onChange} placeholder="Password" />
          </InputGroup>
          <Group>
          </Group>
          <Button onClick={handleLogin} status="Success" type="button" shape="SemiRound" fullWidth>
            Login
          </Button>
        </form>
        {/* <p>
          Don&apos;t have account?{' '}
          <Link href="/auth/register">
            <a>Register</a>
          </Link>
        </p> */}
      </Auth>
    </Layout>
  );
}
