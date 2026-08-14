import Contact from "../components/Contact";
import PageHeader from "../components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitulo="Hablemos"
        titulo="Únete al Cambio"
        breadcrumb={[{ label: "Contacto" }]}
        imagen="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80"
      />
      <Contact />
    </>
  );
}