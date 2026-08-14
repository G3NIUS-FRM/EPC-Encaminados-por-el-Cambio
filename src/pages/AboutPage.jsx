import About from "../components/About";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        subtitulo="Conoce Nuestra Historia"
        titulo="Sobre Nosotros"
        breadcrumb={[{ label: "Sobre Nosotros" }]}
      />
      <About />
    </>
  );
}