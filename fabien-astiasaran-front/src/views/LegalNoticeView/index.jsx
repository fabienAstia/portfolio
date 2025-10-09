import './LegalNotice.css'

export default function LegalNotice(){
    return (
<section className="legalNoticeView h-100">
  <div className="d-flex flex-column container text-center justify-content-center align-items-center h-100">
    <h1>Mentions légales</h1>
    <div className="text-start">
      <p><b>Éditeur :</b> Fabien Astiasaran</p>
      <p><b>Adresse :</b> Paris, France</p>
      <p><b>Email :</b> <a href="mailto:fabien.astiasaran@gmail.com" target='_blank'>fabien.astiasaran@gmail.com</a></p>
      <p><b>Contexte :</b> Portfolio personnel de présentation de projets web</p>

      <p><b>Hébergeur :</b> OVH SAS<br />
        2 rue Kellermann – 59100 Roubaix – France<br />
        <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer">https://www.ovhcloud.com/</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>L’ensemble des contenus de ce site (textes, images, code) sont la propriété exclusive de Fabien Astiasaran, sauf mention contraire.</p>

      <h2>Données personnelles</h2>
      <p>Ce site ne collecte aucune donnée personnelle.</p>

      <h2>Responsabilité</h2>
      <p>L’éditeur ne saurait être tenu responsable d’erreurs ou d’omissions dans le contenu du site.</p>
    </div>
  </div>
</section>
    );
}