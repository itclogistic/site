import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { offices, getOffice } from "@/lib/offices";
import OfficeDetail from "@/components/OfficeDetail";

export function generateStaticParams() {
  return offices.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const office = getOffice(slug);
  if (!office) return {};
  return {
    title: `ITC Logistic ${office.city} — Contact & echipă`,
    description: `${office.companyLine}, ${office.addressLines.join(", ")}. ${office.email}${office.phone ? " · " + office.phone : ""}.`,
  };
}

export default async function OfficePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const office = getOffice(slug);
  if (!office) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.itc-logistic.ro";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `ITC Logistic ${office.city}`,
    parentOrganization: { "@type": "Organization", name: "ITC Logistic Romania SRL" },
    address: {
      "@type": "PostalAddress",
      streetAddress: office.addressLines.join(", "),
      addressLocality: office.city,
      addressCountry: "RO",
    },
    telephone: office.phone,
    email: office.email,
    url: `${baseUrl}/birouri/${office.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OfficeDetail office={office} />
    </>
  );
}
