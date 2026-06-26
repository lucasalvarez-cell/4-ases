import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, updated, children }: Props) {
  return (
    <main className="min-h-screen bg-white pt-20 sm:pt-32 pb-12 sm:pb-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted text-xs uppercase tracking-widest font-sans hover:text-ink transition-colors mb-12"
        >
          <ArrowLeft size={12} />
          Volver al inicio
        </Link>

        <p className="text-[10px] tracking-[0.35em] text-muted uppercase font-sans mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-3">{title}</h1>
        <p className="text-muted text-sm font-sans mb-16">
          Última actualización: {updated}
        </p>

        <div className="legal-content">
          {children}
        </div>
      </div>

      <style>{`
        .legal-content h2 {
          font-family: var(--font-display, serif);
          font-size: 1.25rem;
          color: #0f172a;
          margin: 2.5rem 0 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #e5e4e0;
        }
        .legal-content p {
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .legal-content ul {
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.8;
          margin: 0.5rem 0 1rem 1.25rem;
          list-style: disc;
        }
        .legal-content li {
          margin-bottom: 0.35rem;
        }
        .legal-content a {
          color: #1a6fb5;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .legal-content a:hover {
          color: #0f172a;
        }
        .legal-content strong {
          color: #0f172a;
          font-weight: 600;
        }
        .legal-content table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
          margin: 1rem 0 1.5rem;
        }
        .legal-content th {
          background: #f5f4f0;
          color: #0f172a;
          font-weight: 600;
          text-align: left;
          padding: 10px 14px;
          border: 1px solid #e5e4e0;
        }
        .legal-content td {
          color: #475569;
          padding: 10px 14px;
          border: 1px solid #e5e4e0;
          vertical-align: top;
        }
        .legal-content code {
          background: #f5f4f0;
          padding: 2px 6px;
          font-size: 0.8rem;
          border-radius: 3px;
        }
        em.placeholder {
          color: #f59e0b;
          font-style: normal;
          font-size: 0.75rem;
          background: #fef3c7;
          padding: 1px 6px;
          border-radius: 3px;
          margin-left: 6px;
        }
      `}</style>
    </main>
  );
}
