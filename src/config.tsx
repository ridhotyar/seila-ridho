import Opening from "./assets/icons/opening.svg?react";
import Salam from "./assets/icons/salam.svg?react";
import Quote from "./assets/icons/quote.svg?react";
import Mempelai from "./assets/icons/mempelai.svg?react";
import Acara from "./assets/icons/acara.svg?react";
import Map from "./assets/icons/map.svg?react";
import Galery from "./assets/icons/galery.svg?react";
import Terimakasih from "./assets/icons/terimakasih.svg?react";
import Doa from "./assets/icons/doa.svg?react";
import RundownAcara from "./assets/icons/rundownacara.svg?react";
import Gift from "./assets/icons/gift.svg?react";
import backgroundMusic from "./assets/audios/bg-music.mp3";
import {
  DoaSlider,
  OpeningSlider,
  RundownSlider,
  GreetingSlider,
  QuoteSlider,
  BrideSlider,
  AkadSlider,
  ReceptionSlider,
  MapSlider,
  GalerySlider,
  ThankyouSlider,
  GiftSlider,
} from "./components/sliders";
import manPhoto from "./assets/images/man.jpg";
import womanPhoto from "./assets/images/woman.jpg";
import galery1 from "./assets/images/galery-1.jpg";
import galery2 from "./assets/images/galery-2.jpg";
import galery3 from "./assets/images/galery-3.jpg";
import galery4 from "./assets/images/galery-4.jpg";
import galery5 from "./assets/images/galery-5.jpg";
import galery6 from "./assets/images/galery-6.jpg";

export const config = {
  backgroundMusic: backgroundMusic,
  bride: {
    man: {
      fullName: "Ridho Imantiyar, S.Kom",
      name: "Ridho",
      desc: (
        <>
          Putra kedua dari Bapak Badri, S.Kep, Ns <br />
          dan Ibu Husnawati, S.Pd.I
        </>
      ),
      instagram: "https://www.instagram.com/ridhotiyar/",
      photo: manPhoto,
    },
    woman: {
      fullName: "Seila Tazkiyah, S.Kom",
      name: "Seila",
      desc: (
        <>
          Putri kedua dari Bapak Ir. Dul Kalim <br />
          dan Ibu Nina Octari
        </>
      ),
      instagram: "https://www.instagram.com/seilatz/",
      photo: womanPhoto,
    },
  },
  greeting: {
    title: "Assalamu'alaikum Wr.Wb.",
    content:
      "Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/ Ibu/ Saudara/ I pada acara resepsi pernikahan kami.",
  },
  quote: {
    title: "Q.S. Ar Rum: 21",
    content:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
  },
  event: {
    akad: {
      title: "Weedind Seila & Ridho",
      detail: "Join us to celebrate the wedding of Seila and Ridho!",
      startDate: "2024-12-28 09:00",
      endDate: "2024-12-28 12:00",
      location: "Andaliman Hall, Jl. Abdullah Lubis No.79/101, Merdeka, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153",
    },
    reception: {
      title: "Resepsi Seila & Ridho",
      detail: "Acara Resepsi Pernikahan Seila & Ridho",
      startDate: "2024-12-28 13:00",
      endDate: "2024-12-28 16:00",
      location: "Andaliman Hall, Jl. Abdullah Lubis No.79/101, Merdeka, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153",
    },
  },
  map: {
    link: "https://maps.app.goo.gl/HqMbpVEZT58TWvTN6",
    location: "Andaliman Hall, Jl. Abdullah Lubis No.79/101, Merdeka, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153",
  },
  galeries: [galery1, galery2, galery3, galery4, galery5, galery6],
  rundown: (
    <>
      09:00 - Persiapan <br />
      Pengantin bersiap memasuki Ballroom <br />
      <br />
      09:30 - Memasuki Ruang Acara <br />
      Pengantin memasuki Ballroom menuju pelaminan. <br />
      <br />
      09:45 - Makan & Foto Bersama. <br />
      <br />
      11:00 - Beauty shoot <br />
      Sesi foto pengantin dibimbing oleh Fotografer <br />
      <br />
      12:00 - Istirahat Ganti Kostum <br />
      <br />
      13:00 - Memasuki Ruangan <br />
      Pengantin memasuki ruangan dengan kostum baru <br />
      <br />
      13:30 - Makan & Foto Bersama <br />
      Para tamu undangan dipersilahkan makan dan dapat berfoto bersama di
      pelaminan <br />
      <br />
      16:00 - Acara Selesai
    </>
  ),
  doa: (
    <>
      "Semoga Allah memberkahi di waktu bahagia dan memberkahimu di waktu susah,
      dan mengumpulkan kalian berdua dalam kebaikan" <br />
      <br />~ HR. Abu Daud ~
    </>
  ),
  gift: {
    content: (
      <>
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. <br />
        <br />
        Namun jika Anda ingin memberikan hadiah kami sediakan fitur berikut:
      </>
    ),
  },
  thankYou: (
    <>
      Merupakan suatu kebahagiaan dan kehormatan bagi kami, bila
      Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan doa restu kepada kedua
      mempelai.
      <br />
      <br />
      Hormat kami yang berbahagia
    </>
  ),
  sliderList: [
    {
      label: "Opening",
      icon: <Opening />,
      component: OpeningSlider,
    },
    {
      label: "Salam",
      icon: <Salam />,
      component: GreetingSlider,
    },
    {
      label: "Quote",
      icon: <Quote />,
      component: QuoteSlider,
    },
    {
      label: "Mempelai",
      icon: <Mempelai />,
      component: BrideSlider,
    },
    {
      label: "Akad",
      icon: <Acara />,
      component: AkadSlider,
    },
    {
      label: "Resepsi",
      icon: <Acara />,
      component: ReceptionSlider,
    },
    {
      label: "Lokasi",
      icon: <Map />,
      component: MapSlider,
    },
    {
      label: "Galeri",
      icon: <Galery />,
      component: GalerySlider,
    },
    {
      label: "Rundown Acara",
      icon: <RundownAcara />,
      component: RundownSlider,
    },
    {
      label: "Doa",
      icon: <Doa />,
      component: DoaSlider,
    },
    {
      label: "Gift",
      icon: <Gift />,
      component: GiftSlider,
    },
    {
      label: "Terimakasih",
      icon: <Terimakasih />,
      component: ThankyouSlider,
    },
  ],
};
