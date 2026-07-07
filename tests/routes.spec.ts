import { test, expect } from "@playwright/test";
import { offices } from "../lib/offices";
import { services } from "../lib/services";

const staticRoutes = ["/", "/sitemap.xml", "/robots.txt", "/manifest.webmanifest", "/icon.svg", "/apple-icon"];
const officeRoutes = offices.map((o) => `/birouri/${o.slug}`);
const serviceRoutes = services.map((s) => `/servicii/${s.slug}`);

for (const route of [...staticRoutes, ...officeRoutes, ...serviceRoutes]) {
  test(`GET ${route} responds 200`, async ({ request }) => {
    const res = await request.get(route);
    expect(res.status(), `${route} should return 200`).toBe(200);
  });
}

test("unknown route returns a custom branded 404", async ({ request }) => {
  const res = await request.get("/this-route-does-not-exist");
  expect(res.status()).toBe(404);
  const body = await res.text();
  expect(body).toContain("404");
});
