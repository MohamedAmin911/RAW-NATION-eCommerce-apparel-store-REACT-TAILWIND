import { startTransition } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Marquee from '../../components/Marquee';
import Navbar from '../../components/Navbar';
import { validateSignup } from '../../utils/validators';
import AuthForm from './AuthForm';

const signupFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'enter surname, given name',
    autoComplete: 'name',
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'identity@raw-nation.tech',
    autoComplete: 'email',
  },
  {
    name: 'password',
    label: 'PASSWORD',
    type: 'password',
    placeholder: '********',
    autoComplete: 'new-password',
  },
  {
    name: 'confirmPassword',
    label: 'CONFIRM PASSWORD',
    type: 'password',
    placeholder: '********',
    autoComplete: 'new-password',
  },
];

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    window.setTimeout(() => {
      startTransition(() => navigate('/login'));
    }, 750);

    return {
      message: 'Identity created. Redirecting to login...',
    };
  };

  return (
    <div className="bg-raw-surface">
      <Navbar backLabel="Back to shop" backTo="/shop" minimal />
      <main className="grid min-h-[calc(100svh-5rem)] lg:grid-cols-2">
        <section className="relative hidden overflow-hidden bg-black lg:flex lg:items-center lg:justify-center">
          <img
            alt="Industrial texture"
            className="absolute inset-0 h-full w-full object-cover opacity-65"
            src="/media/raw-nation/signup-texture.jpg"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black" />
          <div className="relative z-10 max-w-md text-center text-white">
            <p className="inline-block bg-raw-warning px-4 py-2 font-headline text-sm font-black uppercase tracking-[0.24em] text-raw-ink">
              Create identity
            </p>
            <p className="mt-8 text-sm font-medium uppercase tracking-[0.16em] text-white/70">
              Register to track orders, save carts, and receive the first signal whenever a new
              RAW NATION capsule drops.
            </p>
          </div>
        </section>
        <section className="industrial-grid flex items-center justify-center px-6 py-16">
          <AuthForm
            eyebrow="Register"
            fields={signupFields}
            footer={
              <div className="text-center text-sm font-bold uppercase tracking-[0.16em] text-raw-muted">
                Already a member?{' '}
                <Link className="text-raw-ink underline underline-offset-4" to="/login">
                  Login here
                </Link>
              </div>
            }
            onSubmit={handleSubmit}
            submitLabel="Create account"
            subtitle="Section: onboarding / protocol 01"
            title="Register"
            validate={validateSignup}
          />
        </section>
      </main>
      <Marquee items={['Create identity', 'Made in hell', 'No refunds', 'High performance']} />
      <Footer compact />
    </div>
  );
}
