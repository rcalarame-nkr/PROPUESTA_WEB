export default function BrandMark({ compact = false }) {
  return (
    <div className="brand-mark" aria-label="Norfolk Risk">
      <span className="brand-symbol">N</span>
      {!compact && (
        <span className="brand-copy">
          <strong>Norfolk Risk</strong>
          <small>Corporate insurance</small>
        </span>
      )}
    </div>
  );
}
