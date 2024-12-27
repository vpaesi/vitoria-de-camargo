import { useState, useEffect } from 'react';

const personalInfo = {
  firstName: "Vitória",
  lastName: "de Camargo",
  fullName: "Vitória Paesi Peregrina de Camargo",
  birthDate: "20 de outubro de 1997",
  age: new Date().getFullYear() - new Date("1997-10-20").getFullYear(),
  city: "Alvorada/RS",
  email: "paesivitoria@gmail.com",
  phone: "(51) 99196-9824",
  socialMedia: {
    github: "https://github.com/vpaesi",
    instagram: "https://www.instagram.com/viehdevitoria/",
    linkedin: "https://www.linkedin.com/in/vpaesi/",
    email: "mailto:paesivitoria@gmail.com",
    tvTime: "https://tvtime.com/r/36zZa",
    whats: "https://wa.me/5551991969824",
  }
};

export const useAddress = () => {
  const [address, setAddress] = useState("Loading address...");

  useEffect(() => {
    fetch('https://viacep.com.br/ws/94818290/json/')
      .then((response) => response.json())
      .then((data) => {
        setAddress(`${data.bairro} - ${data.localidade}/${data.uf}`);
      })
      .catch(() => {
        setAddress("Address not found");
      });
  }, []);

  return address;
};

export default personalInfo;
