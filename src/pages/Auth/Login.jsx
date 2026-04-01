import { startTransition } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Marquee from '../../components/Marquee';
import Navbar from '../../components/Navbar';
import { validateLogin } from '../../utils/validators';
import AuthForm from './AuthForm';

const loginFields = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'user@rawnation.hell',
    autoComplete: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '********',
    autoComplete: 'current-password',
  },
];

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    window.setTimeout(() => {
      startTransition(() => navigate('/shop'));
    }, 700);

    return {
      message: 'Access granted. Redirecting to the catalog...',
    };
  };

  return (
    <div className="bg-raw-surface">
      <Navbar backLabel="Back to shop" backTo="/shop" minimal />
      <main className="grid min-h-[calc(100svh-5rem)] lg:grid-cols-2">
        <section className="relative hidden overflow-hidden bg-black lg:flex lg:items-end lg:p-14">
          <img
            alt="Industrial machine"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            src="/media/raw-nation/login-machine.jpg"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/10" />
          <div className="relative z-10 max-w-lg text-white">
            <h2 className="title-block text-6xl">Join The Resistance</h2>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-white/70">
              Established in chaos. Operating in the void.
            </p>
          </div>
        </section>
        <section className="industrial-grid flex items-center justify-center px-6 py-16">
          <AuthForm
            fields={loginFields}
            footer={
              <div className="flex flex-col gap-3 border-t-2 border-black/10 pt-6 text-sm font-bold uppercase tracking-[0.16em] text-raw-muted sm:flex-row sm:justify-between">
                <a href="mailto:support@rawnation.hell">Forgot password?</a>
                <Link className="text-raw-ink underline underline-offset-4" to="/signup">
                  Create account
                </Link>
              </div>
            }
            onSubmit={handleSubmit}
            submitLabel="Login"
            subtitle="Section: onboarding / protocol 01"
            title="Login"
            validate={validateLogin}
          />
        </section>
      </main>
      <Marquee items={['New drop Friday 00:00 EST', 'Worldwide shipping', 'Heavyweight cotton only', 'Login clearance active']} />
      <Footer compact />
    </div>
  );
}
