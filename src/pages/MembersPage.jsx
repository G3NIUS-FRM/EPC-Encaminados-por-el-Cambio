import Members from "../components/Members";
import PageHeader from "../components/PageHeader";

export default function MembersPage() {
  return (
    <>
      <PageHeader
        subtitulo="Nuestro Equipo"
        titulo="Liderazgo del Partido"
        breadcrumb={[{ label: "Miembros" }]}
      />
      <Members />
    </>
  );
}