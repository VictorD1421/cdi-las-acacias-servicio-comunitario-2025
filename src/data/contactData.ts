import { Phone, MapPin, Mail } from "lucide-react";

const contactData = [
  {
    icon: MapPin,
    title: "Nuestra Dirección",
    content: "CDI Dr. José María Vargas",
    content2:
      "CDI Dr. José María Vargas, Las Acacias. 6CJ8+RQ2, C. E, Maracay 2103, Aragua",
    url: "https://maps.app.goo.gl/Zy6AQ4uUGR5TD3wM7",
  },
  {
    icon: Phone,
    title: "Llámanos",
    content: "0000000",
    url: "tel:+000000000",
    tag: "telefono",
  },
  {
    icon: Mail,
    title: "Nuestro Correo",
    content: "correo@correo.com",
    url: "mailto:correo@correo.com",
  },
];

export default contactData;
