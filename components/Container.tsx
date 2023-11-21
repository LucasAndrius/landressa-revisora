export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-5xl scroll-smooth px-10">
      {children}
    </div>
  );
}

//container mx-auto max-w-5xl scroll-smooth px-10
