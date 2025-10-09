const SectionWrapper = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
