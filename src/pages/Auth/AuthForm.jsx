import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

function buildInitialState(fields) {
  return fields.reduce((state, field) => ({ ...state, [field.name]: '' }), {});
}

export default function AuthForm({
  eyebrow,
  title,
  subtitle,
  fields,
  submitLabel,
  validate,
  onSubmit,
  footer,
}) {
  const [values, setValues] = useState(buildInitialState(fields));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (name, value) => {
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }));
    setStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus('Please resolve the highlighted fields.');
      return;
    }

    setSubmitting(true);

    try {
      const result = await onSubmit(values);
      setStatus(result?.message ?? 'Transmission complete.');
      setErrors({});
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h1 className="title-block text-5xl sm:text-6xl">{title}</h1>
      <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-raw-muted">{subtitle}</p>

      <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <Input
            key={field.name}
            autoComplete={field.autoComplete}
            error={errors[field.name]}
            label={`${String(index + 1).padStart(2, '0')}. ${field.label}`}
            onChange={(event) => handleChange(field.name, event.target.value)}
            placeholder={field.placeholder}
            type={field.type}
            value={values[field.name]}
          />
        ))}
        {status ? (
          <p className="border-l-4 border-raw-warning bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-raw-ink">
            {status}
          </p>
        ) : null}
        <Button fullWidth size="lg" type="submit">
          {submitting ? 'Processing...' : submitLabel}
        </Button>
      </form>
      {footer ? <div className="mt-8">{footer}</div> : null}
    </div>
  );
}
