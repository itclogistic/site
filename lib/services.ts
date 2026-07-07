import type { dict } from "@/lib/dict";

export type Service = {
  slug: string;
  titleKey: "svc1.title" | "svc2.title" | "svc3.title" | "svc4.title";
  textKey: "svc1.text" | "svc2.text" | "svc3.text" | "svc4.text";
  bulletKeys: (keyof typeof dict)[];
  photo: string;
  photoPosition?: string;
};

export const services: Service[] = [
  {
    slug: "depozitare-contractuala",
    titleKey: "svc1.title",
    textKey: "svc1.text",
    bulletKeys: ["svc1.bullet.1", "svc1.bullet.2", "svc1.bullet.3", "svc1.bullet.4"],
    photo: "/images/warehouse-interior.jpg",
  },
  {
    slug: "transport-rutier",
    titleKey: "svc2.title",
    textKey: "svc2.text",
    bulletKeys: ["svc2.bullet.1", "svc2.bullet.2", "svc2.bullet.3", "svc2.bullet.4"],
    photo: "/images/hero-road.jpg",
  },
  {
    slug: "expeditii-aeriene-maritime",
    titleKey: "svc3.title",
    textKey: "svc3.text",
    bulletKeys: ["svc3.bullet.1", "svc3.bullet.2", "svc3.bullet.3", "svc3.bullet.4"],
    photo: "/images/hero-port.jpg",
    photoPosition: "center 22%",
  },
  {
    slug: "concepte-logistice-personalizate",
    titleKey: "svc4.title",
    textKey: "svc4.text",
    bulletKeys: ["svc4.bullet.1", "svc4.bullet.2", "svc4.bullet.3", "svc4.bullet.4"],
    photo: "/images/aerial-complex.jpg",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
