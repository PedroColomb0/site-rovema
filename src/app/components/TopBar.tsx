import React from "react";

const TopBar: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white text-sm py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <ContactInfo label="Telefone" value="+55 69 1234-5678" />
        <ContactInfo label="E-mail" value="contato@gruporovema.com.br" />
      </div>
    </header>
  );
};

interface ContactInfoProps {
  label: string;
  value: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ label, value }) => (
  <div className="flex items-center space-x-2">
    <span className="font-bold">{label}:</span>
    <span>{value}</span>
  </div>
);

export default TopBar;
