import React, { useState } from 'react';
import * as Yup from 'yup';

import api from '../../services/api';

import { Container, Form, Input } from './styles';

function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const data = {
        name,
        email,
      };

      const schema = Yup.object().shape({
        name: Yup.string().required('Preencha com seu nome completo'),
        email: Yup.string()
          .email('Preencha com um e-mail válido')
          .required('Preencha com um e-mail válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('newsletter', data);

      setName('');
      setEmail('');
      setErrorName('');
      setErrorEmail('');

      // eslint-disable-next-line no-alert
      alert('Cadastro realizado com sucesso!');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};

        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        setErrorName(validationErrors.name);
        setErrorEmail(validationErrors.email);
      }
    }
  }

  return (
    <Container>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <Form onSubmit={handleSubmit}>
        <Input errorInput={errorName}>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={e => {
              setName(e.target.value);
              setErrorName('');
            }}
          />
          {errorName && <p>{errorName}</p>}
        </Input>
        <Input errorInput={errorEmail}>
          <input
            type="text"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setErrorEmail('');
            }}
          />
          {errorEmail && <p>{errorEmail}</p>}
        </Input>
        <button type="submit">Eu quero!</button>
      </Form>
    </Container>
  );
}

export default Newsletter;
