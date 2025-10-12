export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-10">
      {children}
    </div>
  );
}


