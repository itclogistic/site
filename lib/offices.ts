export type Person = {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  mobile?: string;
};

export type Department = {
  name: string;
  people: Person[];
};

export type Office = {
  slug: string;
  city: string;
  isHQ?: boolean;
  companyLine: string;
  addressLines: string[];
  phone?: string;
  fax?: string;
  email: string;
  website?: string;
  tags: ("tag.hq" | "tag.wh" | "tag.wh2" | "tag.office")[];
  departments: Department[];
  /** query string for the Google Maps embed */
  mapQuery: string;
};

export const offices: Office[] = [
  {
    slug: "brasov",
    city: "Brașov",
    isHQ: true,
    companyLine: "SC ITC Logistic Romania SRL",
    addressLines: ["Str. Bucegi nr. 3A", "Brașov, județul Brașov, 500053"],
    phone: "+40 268 4060-23, 24",
    fax: "+40 268 4060-25",
    email: "romania@itc-logistic.ro",
    website: "https://www.itc-logistic.ro",
    tags: ["tag.hq", "tag.wh"],
    mapQuery: "Str. Bucegi nr. 3A, Brașov 500053, Romania",
    departments: [
      {
        name: "Management",
        people: [
          { name: "Sorin Șerbănescu", title: "Managing Director", email: "s.serbanescu@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 724 894 479" },
        ],
      },
      {
        name: "Sales",
        people: [
          { name: "Bogdan Stinceanu", title: "Sales Manager", email: "b.stinceanu@itc-logistic.ro", phone: "+40 268 4060-28", mobile: "+40 731 260 418" },
          { name: "Ionuț Ferent", title: "Sales Executive", email: "i.ferent@itc-logistic.ro", phone: "+40 268 4060-28", mobile: "+40 725 101 578" },
        ],
      },
      {
        name: "Operational",
        people: [
          { name: "Paul Tănase", title: "Transport Coordinator", email: "p.tanase@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 726 115 989" },
          { name: "Andreea Gogonea", title: "Transport Coordinator", email: "a.gogonea@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 722 377 182" },
          { name: "Iuliana Alexandra Rus", title: "Transport Coordinator", email: "a.rus@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 725 500 196" },
        ],
      },
      {
        name: "Warehouse",
        people: [
          { name: "Cristinel Manta", title: "Warehouse Coordinator", email: "cr.manta@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 734 114 199" },
        ],
      },
      {
        name: "Financial",
        people: [
          { name: "Mihaela Vasile", title: "Financial Department", email: "m.vasile@itc-logistic.ro", phone: "+40 268 4060-24", mobile: "+40 725 101 577" },
          { name: "Elena Stănilă", title: "Financial Department", email: "e.stanila@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 725 899 177" },
          { name: "Andreea Frățilă", title: "Financial Department", email: "a.fratila@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 725 899 176" },
          { name: "Mădălina Crăciun", title: "Financial Department", email: "m.craciun@itc-logistic.ro", phone: "+40 268 4060-24", mobile: "+40 735 011 351" },
          { name: "Mădălina Răducan", title: "Financial Department", email: "m.raducan@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 722 377 217" },
          { name: "Teodora Gorban", title: "Financial Department", email: "t.gorban@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 720 007 801" },
          { name: "Ioana Morhan", title: "Financial Department", email: "i.morhan@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 728 873 797" },
        ],
      },
    ],
  },
  {
    slug: "timisoara",
    city: "Timișoara",
    companyLine: "SC ITC Logistic Romania SRL",
    addressLines: ["Calea Aviatorilor nr. 4", "RO-307200 Ghiroda, județul Timiș"],
    phone: "+40 256 2123-22",
    fax: "+40 256 2123-20",
    email: "romania@itc-logistic.ro",
    website: "https://www.itc-logistic.ro",
    tags: ["tag.wh2", "tag.office"],
    mapQuery: "Calea Aviatorilor nr. 4, Ghiroda, Timiș, Romania",
    departments: [
      {
        name: "Management",
        people: [{ name: "Sorin Șerbănescu", title: "Managing Director", email: "s.serbanescu@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 724 894 479" }],
      },
      {
        name: "Sales",
        people: [
          { name: "Cristian Manta", title: "Area Sales Manager", email: "c.manta@itc-logistic.ro", phone: "+40 256 21 23 22", mobile: "+40 725 500 160" },
          { name: "Andreea Strâmbeanu", title: "Sales Department", email: "a.strambeanu@itc-logistic.ro", phone: "+40 256 21 23 22", mobile: "+40 799 947 080" },
        ],
      },
      {
        name: "Operational",
        people: [
          { name: "Alexandru Lazăr", title: "Transport Coordinator", email: "a.lazar@itc-logistic.ro", phone: "+40 256 21 23 22", mobile: "+40 724 249 577" },
          { name: "Alin Duțu", title: "Transport Coordinator", email: "timisoarawh2@itc-logistic.ro", phone: "+40 256 21 23 22", mobile: "+40 724 251 191" },
          { name: "Lucian Ionescu", title: "Transport Coordinator", email: "l.ionescu@itc-logistic.ro", phone: "+40 256 21 23 22", mobile: "+40 722 310 591" },
          { name: "Andreea Suliță", title: "Transport Coordinator", email: "a.sulita@itc-logistic.ro", phone: "+40 256 21 23 22", mobile: "+40 731 024 648" },
          { name: "Claudiu Jurchescu", title: "Transport Coordinator", email: "c.jurchescu@itc-logistic.ro", phone: "+40 256 21 23 22", mobile: "+40 724 249 577" },
        ],
      },
      {
        name: "Warehouse",
        people: [{ name: "Alexandru Radan", title: "Warehouse Manager", email: "a.radan@itc-logistic.ro", phone: "+40 256 21 23 22", mobile: "+40 735 844 355" }],
      },
    ],
  },
  {
    slug: "bucuresti",
    city: "București",
    companyLine: "SC ITC Logistic Romania SRL",
    addressLines: ["Str. Maior Gheorghe Șonțu nr. 10-12", "Et. 2, cam. 8, Sector 1, 011448"],
    phone: "+40 21 4080-067",
    fax: "+40 21 4080-069",
    email: "romania@itc-logistic.ro",
    website: "https://www.itc-logistic.ro",
    tags: ["tag.office"],
    mapQuery: "Str. Maior Gheorghe Șonțu nr. 10-12, București, Romania",
    departments: [
      {
        name: "Management",
        people: [{ name: "Sorin Șerbănescu", title: "Managing Director", email: "s.serbanescu@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 724 894 479" }],
      },
      {
        name: "Sales",
        people: [
          { name: "Radu Teișanu", title: "Sales Department", email: "r.teisanu@itc-logistic.ro", phone: "+40 21 408 00 68", mobile: "+40 726 135 163" },
          { name: "Gabriela Stark", title: "Key Account Executive", email: "g.stark@itc-logistic.ro", phone: "+40 21 408 00 67", mobile: "+40 725 500 198" },
        ],
      },
      {
        name: "Operational",
        people: [
          { name: "Valentin Mandae", title: "Transport Coordinator", email: "v.mandae@itc-logistic.ro", phone: "+40 21 408 00 65", mobile: "+40 732 161 731" },
          { name: "Diana Mandae", title: "Transport Coordinator", email: "d.mandae@itc-logistic.ro", phone: "+40 21 408 00 65", mobile: "+40 720 066 219" },
          { name: "Dan Smarandache", title: "Transport Coordinator", email: "d.smarandache@itc-logistic.ro", phone: "+40 21 408 00 68", mobile: "+40 725 101 579" },
          { name: "Georgiana Teișanu", title: "Transport Coordinator", email: "g.teisanu@itc-logistic.ro", phone: "+40 21 408 00 68", mobile: "+40 723 356 050" },
          { name: "Sergiu Botez", title: "Transport Coordinator", email: "s.botez@itc-logistic.ro", phone: "+40 21 408 00 66", mobile: "+40 723 356 050" },
          { name: "Cristian Blendia", title: "Transport Coordinator", email: "c.blendia@itc-logistic.ro", phone: "+40 21 408 00 66", mobile: "+40 722 181 610" },
        ],
      },
      {
        name: "Sea & Air",
        people: [
          { name: "Florin Văduva", title: "Operational Department", email: "f.vaduva@itc-logistic.ro", phone: "+40 21 408 00 66", mobile: "+40 725 500 199" },
          { name: "Cristina Gheorghe", title: "Operational Department", email: "g.cristina@itc-logistic.ro", phone: "+40 256 21 23 22", mobile: "+40 724 220 512" },
        ],
      },
    ],
  },
  {
    slug: "cluj-napoca",
    city: "Cluj-Napoca",
    companyLine: "SC ITC Logistic Romania SRL",
    addressLines: ["Str. René Jeannel nr. 8", "Clădirea B, et. 4, cam. 4.7, 400221"],
    phone: "+40 264 257-396",
    fax: "+40 264 257-397",
    email: "romania@itc-logistic.ro",
    website: "https://www.itc-logistic.ro",
    tags: ["tag.office"],
    mapQuery: "Str. René Jeannel nr. 8, Cluj-Napoca, Romania",
    departments: [
      {
        name: "Management",
        people: [{ name: "Sorin Șerbănescu", title: "Managing Director", email: "s.serbanescu@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 724 894 479" }],
      },
      {
        name: "Operational",
        people: [
          { name: "Constantin Popiță", title: "Transport Coordinator", email: "c.popita@itc-logistic.ro", phone: "+40 264 25 73 96", mobile: "+40 733 109 997" },
          { name: "Tibor Kajcsa", title: "Transport Coordinator", email: "t.kajcsa@itc-logistic.ro", phone: "+40 264 25 73 96", mobile: "+40 725 003 431" },
        ],
      },
    ],
  },
  {
    slug: "oradea",
    city: "Oradea",
    companyLine: "SC ITC Logistic Romania SRL",
    addressLines: ["Str. Sântăului nr. 1B, parter", "Oradea, județul Bihor, 410144"],
    phone: "+40 268 4060-28",
    fax: "+40 268 4060-25",
    email: "romania@itc-logistic.ro",
    website: "https://www.itc-logistic.ro",
    tags: ["tag.office"],
    mapQuery: "Str. Sântăului nr. 1B, Oradea, Romania",
    departments: [
      {
        name: "Management",
        people: [{ name: "Sorin Șerbănescu", title: "Managing Director", email: "s.serbanescu@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 724 894 479" }],
      },
      {
        name: "Sales",
        people: [{ name: "Dorin Tripon", title: "Area Sales Manager", email: "d.tripon@itc-logistic.ro", phone: "+40 268 4060-23", mobile: "+40 729 053 333" }],
      },
      {
        name: "Operational",
        people: [{ name: "Alexandra Hîrța", title: "Transport Coordinator" }],
      },
    ],
  },
];

export function getOffice(slug: string) {
  return offices.find((o) => o.slug === slug);
}
