export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-auto">
      <div className="md:my-10 lg:my-20">
        <div className="grid-container  lg:gap-20">{children}</div>
      </div>
    </section>
  );
}
