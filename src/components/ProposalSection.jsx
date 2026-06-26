export default function ProposalSection({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`proposal-section ${className}`}>
      <div className="section-heading">
        {eyebrow && <span>{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
