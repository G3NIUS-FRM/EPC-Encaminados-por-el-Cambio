import Ministries from "../components/Ministries";
import PageHeader from "../components/PageHeader";

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        subtitulo="Gabinete del Partido"
        titulo="Nuestros Ministerios"
        breadcrumb={[{ label: "Ministerios" }]}
        imagen="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />
      <Ministries />
    </>
  );
}