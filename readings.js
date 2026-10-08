// Reading list data — edit this file to add, remove or change entries.
// Fields: a = author(s), t = title, y = year (number, used for the timeline),
//         p = publisher / source, url = optional link, kind = "book" | "article"
// Optional for citations: ytext = year as printed (e.g. "1983–85"),
//         edBy = editors of an authored book, edn = edition (e.g. "5th ed."), journal / no / date = for articles.
// Authors: "Last, First" separated by ";" — add " (Ed.)" / " (Eds.)" for editors.
// Categories are listed in display order; each entry sits under one.

window.COURSE = {
  title: "Advanced Introduction into ADP",
  term: "WS 25/26",
  teacher: "Christopher Gruber"
};

window.READINGS = [
  {
    category: "Theoretical Foundations & Media Philosophy",
    items: [
      { a: "Ahmed, Sara", t: "Queer Phenomenology: Orientations, Objects, Others", p: "Duke University Press", y: 2006 },
      { a: "Benjamin, Walter", t: "The Work of Art in the Age of Mechanical Reproduction", p: "", y: 1936, kind: "article" },
      { a: "Butler, Judith", t: "Gender Trouble: Feminism and the Subversion of Identity", p: "Routledge", y: 1990 },
      { a: "Crary, Jonathan", t: "Techniques of the Observer: On Vision and Modernity in the 19th Century", p: "MIT Press", y: 1990 },
      { a: "Deleuze, Gilles", t: "Cinema 1: The Movement-Image & Cinema 2: The Time-Image", p: "University of Minnesota Press", y: 1983, ytext: "1983–85" },
      { a: "Kittler, Friedrich", t: "Optical Media: Berlin Lectures 1999", p: "Polity Press", y: 2010 },
      { a: "Manovich, Lev", t: "The Language of New Media", p: "MIT Press", y: 2001 },
      { a: "Rancière, Jacques", t: "The Future of the Image", p: "Verso", y: 2007 }
    ]
  },
  {
    category: "Architectural Representation & Image-Making",
    items: [
      { a: "Gursky, Andreas", t: "Architecture", p: "Hatje Cantz", y: 2008 },
      { a: "Baan, Iwan", t: "Iwan Baan: 52 Weeks, 52 Cities", p: "", y: null },
      { a: "Princen, Bas; Geers, Kersten; Küng, Moritz; Manaugh, Geoff", t: "Bas Princen: The Construction of an Image", p: "London: Bedford Press", y: 2016 },
      { a: "Colomina, Beatriz", t: "Privacy and Publicity: Modern Architecture as Mass Media", p: "MIT Press", y: 1996 },
      { a: "Demand, Thomas", t: "Model Studies", p: "London: Ivory Press", y: 2011 },
      { a: "Demand, Thomas", t: "Model Studies: 1+2", p: "Köln: Verlag der Buchhandlung Walther König", y: 2015 },
      { a: "Demand, Thomas", t: "House of Card", p: "MACK", y: 2020 },
      { a: "Fitz, Angelika; Lenz, Gabriele", t: "Vom Nutzen der Architekturfotografie: Positionen zur Beziehung von Bild und Architektur", p: "Birkhäuser", y: 2015 },
      { a: "Frampton, Kenneth", t: "Labour, Work and Architecture: Collected Essays on Architecture and Design", p: "Phaidon", y: 2002 },
      { a: "Linke, Armin; Jovanović Weiss, Srdjan", t: "Socialist Architecture: The Vanishing Act", p: "Zürich: Codax", y: 2012,
        edBy: "Tobia Bezzola, Markus Bosshard, and Philip Ursprung" },
      { a: "Pardo, Alona; Redstone, Elias (Eds.)", t: "Constructing Worlds: Photography and Architecture in the Modern Age", p: "Prestel", y: 2014 },
      { a: "Ryan, Zoe (Ed.)", t: "Hélène Binet: Composing Space", p: "", y: null },
      { a: "Sbriglio, Jacques, et al.", t: "Le Corbusier & Lucien Hervé: A Dialogue between Architect and Photographer", p: "Getty Publications", y: 2011 }
    ]
  },
  {
    category: "Digital Media, AI & Algorithmic Perception",
    items: [
      { a: "Bogost, Ian", t: "Alien Phenomenology, or What It’s Like to Be a Thing", p: "University of Minnesota Press", y: 2012 },
      { a: "Buchloh, Benjamin", t: "Art Since 1900: Modernism, Antimodernism, Postmodernism", p: "Thames & Hudson", y: 2004 },
      { a: "Chun, Wendy Hui Kyong", t: "Updating to Remain the Same: Habitual New Media", p: "MIT Press", y: 2016 },
      { a: "Easterling, Keller", t: "Extrastatecraft: The Power of Infrastructure Space", p: "Verso", y: 2014 },
      { a: "Galloway, Alexander R.", t: "The Interface Effect", p: "Polity Press", y: 2012 },
      { a: "Pasquinelli, Matteo", t: "The Eye of the Master: A Social History of Artificial Intelligence", p: "Verso", y: 2023 },
      { a: "Uricchio, William", t: "We Have Never Been Digital: Cognition, Computation, and the Rise of Artificial Intelligence", p: "MIT Press", y: 2024 },
      { a: "Steyerl, Hito", t: "In Defense of the Poor Image", p: "e-flux Journal, no. 10, November 2009", y: 2009, kind: "article",
        journal: "e-flux Journal", no: 10, date: "November 2009",
        url: "https://www.e-flux.com/journal/10/61362/in-defense-of-the-poor-image/" }
    ]
  },
  {
    category: "Photography, Video & Visual Culture",
    items: [
      { a: "Azoulay, Ariella", t: "The Civil Contract of Photography", p: "MIT Press", y: 2008 },
      { a: "Batchen, Geoffrey", t: "Burning with Desire: The Conception of Photography", p: "MIT Press", y: 1997 },
      { a: "Becher, Bernd; Becher, Hilla", t: "Basic Forms – Grundformen", p: "Schirmer Mosel", y: 2014 },
      { a: "Didi-Huberman, Georges", t: "Images in Spite of All: Four Photographs from Auschwitz", p: "University of Chicago Press", y: 2008 },
      { a: "Fontcuberta, Joan", t: "Pandora’s Camera: Photography after Photography", p: "Mack", y: 2014 },
      { a: "Lister, Martin", t: "The Photographic Image in Digital Culture", p: "Routledge", y: 2013 },
      { a: "Marcoci, Roxana; Eugenides, Jeffrey; Demand, Thomas", t: "Thomas Demand [MoMA Exhibition Catalog]", p: "Museum of Modern Art", y: 2005 },
      { a: "Mulvey, Laura", t: "Visual and Other Pleasures", p: "Indiana University Press", y: 1989 },
      { a: "Rose, Gillian", t: "Visual Methodologies: An Introduction to Researching with Visual Materials", p: "SAGE", y: 2022, edn: "5th ed." },
      { a: "Sekula, Allan", t: "Fish Story", p: "Richter Verlag", y: 1995 },
      { a: "Sontag, Susan", t: "On Photography", p: "Anchor Books", y: 1990 },
      { a: "Szarkowski, John", t: "The Photographer’s Eye", p: "Museum of Modern Art", y: 1966 }
    ]
  },
  {
    category: "Architecture, Space & Politics",
    items: [
      { a: "Debord, Guy", t: "The Society of the Spectacle", p: "Zone Books", y: 1967 },
      { a: "Foucault, Michel", t: "Discipline and Punish: The Birth of the Prison", p: "Vintage", y: 1975 },
      { a: "Harvey, David", t: "The Condition of Postmodernity", p: "Blackwell", y: 1989 },
      { a: "Lefebvre, Henri", t: "The Production of Space", p: "Blackwell", y: 1991 },
      { a: "Massey, Doreen", t: "Space, Place and Gender", p: "Polity Press", y: 1994 },
      { a: "Mbembe, Achille", t: "Necropolitics", p: "Duke University Press", y: 2019 },
      { a: "Weizman, Eyal", t: "Forensic Architecture: Violence at the Threshold of Detectability", p: "Zone Books", y: 2017 }
    ]
  },
  {
    category: "Gender, Race & Visuality in Space",
    items: [
      { a: "hooks, bell", t: "Black Looks: Race and Representation", p: "South End Press", y: 1992 },
      { a: "Moholy-Nagy, Lucia", t: "Marginal Notes: Women, Architecture, and Representation", p: "MIT Press", y: 2023 },
      { a: "Parker, Rozsika; Pollock, Griselda", t: "Old Mistresses: Women, Art, and Ideology", p: "", y: null },
      { a: "Preciado, Paul B.", t: "Testo Junkie: Sex, Drugs, and Biopolitics in the Pharmacopornographic Era", p: "Feminist Press", y: 2013 },
      { a: "Rendell, Jane", t: "The Pursuit of Pleasure: Gender, Space and Architecture in Regency London", p: "Rutgers University Press", y: 2010 },
      { a: "Tobias, Jenni", t: "Queering Architecture: Space, Affect, and Representation", p: "Routledge", y: 2021 }
    ]
  },
  {
    category: "Experimental & Alternative Image-Making",
    items: [
      { a: "Bridle, James", t: "New Dark Age: Technology and the End of the Future", p: "Verso", y: 2018 },
      { a: "Foster, Hal", t: "The Return of the Real: The Avant-Garde at the End of the Century", p: "MIT Press", y: 1996 },
      { a: "Graham, Beryl", t: "Rethinking Curating: Art after New Media", p: "MIT Press", y: 2010 },
      { a: "Gunning, Tom", t: "The Cinema of Attractions: Early Film, Its Spectator, and the Avant-Garde", p: "University of Chicago Press", y: 1986 }
    ]
  },
  {
    category: "Operational Images",
    items: [
      { a: "Parikka, Jussi", t: "Operational Images: From the Visual to the Invisual", p: "University of Minnesota Press", y: 2023 },
      { a: "Eder, Jens; Klonk, Charlotte (Eds.)", t: "Image Operations: Visual Media and Political Conflict", p: "Manchester University Press", y: 2016 },
      { a: "Paglen, Trevor", t: "Operational Images", p: "e-flux Journal, no. 59, November 2014", y: 2014, kind: "article",
        journal: "e-flux Journal", no: 59, date: "November 2014" },
      { a: "Flusser, Vilém", t: "Towards a Philosophy of Photography", p: "Reaktion Books", y: 1984 },
      { a: "Flusser, Vilém", t: "Into the Universe of Technical Images", p: "University of Minnesota Press", y: 2011 }
    ]
  }
];
