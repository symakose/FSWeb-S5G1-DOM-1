const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const baslik = document.querySelector("h1");
const anchors = document.querySelectorAll("a");
const siteLogo = document.querySelector("#logo-img");
const buton = document.querySelector("button");
const ctaImg = document.querySelector("#cta-img");
const h4Tags = document.querySelectorAll("h4");
const pTags = document.querySelectorAll("p");
const middleImg = document.querySelector(".middle-img");
const footerTag = document.querySelector("footer a");

anchors.forEach((element, i = 1) => {
  element.classList.add("italic");
  element.textContent = siteContent["nav"]["nav-item-" + i];
  i++;
});

siteLogo.setAttribute("src", siteContent.images["logo-img"]);
baslik.textContent = siteContent.cta.h1;
buton.textContent = siteContent.cta.button;
ctaImg.setAttribute("src", siteContent.images["cta-img"]);

// h4 taglerini tek tek textContent attribute u ile değiştireceğim.
h4Tags[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4Tags[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
h4Tags[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
h4Tags[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
h4Tags[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];
h4Tags[5].textContent = siteContent.iletisim["iletişim-h4"];

//pTagsleri için yine her birini textContent ile değiştireceğim.
pTags[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
pTags[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
pTags[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
pTags[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
pTags[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];
// iletişim kısmının her bir valuesu için ayrı ayrı index içine alıp değiştireceğim.
pTags[5].textContent = siteContent.iletisim.adres;
pTags[6].textContent = siteContent.iletisim.telefon;
pTags[7].textContent = siteContent.iletisim.email;

// ortadaki resmi setAttribute methodu ile ekleyeceğim.
middleImg.setAttribute("src", siteContent.images["accent-img"]);

// footerTag ini textContent methodu ile değiştireceğim.
footerTag.textContent = siteContent.footer.copyright;
footerTag.classList.add("bold");
