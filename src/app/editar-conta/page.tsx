"use client"
import React from 'react';
import Form from '../../components/Form/Form';
import '../../components/Form/style.css';

interface EditAccountFormProps {
  initialValues: Record<string, string>;
}

const EditAccountForm: React.FC<EditAccountFormProps> = ({ initialValues }) => {
  const fields = [
    { label: 'Nome', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Senha', name: 'password', type: 'password' },
  ];

  const handleEditAccount = (formData: Record<string, string>) => {
    console.log('Dados de Edição de Conta:', formData);
  };

  return <Form fields={fields} onSubmit={handleEditAccount} initialValues={initialValues} />;
};

export default EditAccountForm;
