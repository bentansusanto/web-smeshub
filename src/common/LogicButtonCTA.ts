"use client";
import { usePathname } from "next/navigation";

const ButtonCTA = () => {
  const pathName = usePathname();
  let buttonLabel: string = "";
  let buttonHref: string = "";
  let buttonForm: string = "";
  const phoneSmeshub = "+6285716629957"; // Ganti dengan nomor WhatsApp tujuan
  const phonePartnerShip = "+6285716629957"; // Ganti dengan nomor WhatsApp tujuan
  const message = "Halo, saya tertarik untuk mengetahui lebih lanjut!"; // Ganti dengan pesan default
  const url = `https://wa.me/${phoneSmeshub}?text=${encodeURIComponent(
    message
  )}`;
  const urlPartner = `https://wa.me/${phonePartnerShip}?text=${encodeURIComponent(
    message
  )}`;
  const grupTelegramSmesPeople = "https://t.me/komunitasumkmsmeshub";
  const linkFormSmesPeople = "https://forms.gle/64q7gwRzY4Azt5Nq6";

  if(pathName === '/' || pathName === '/about-us/'){
    buttonLabel = 'Ayo Kolaborasi';
    buttonHref = url
  }else if (pathName === '/smes-xperience/'){
    buttonLabel = 'Gabung Sekarang';
    buttonHref = urlPartner;
  }else if (pathName === '/smes-people/'){
    buttonLabel = 'Gabung Komunitas';
    buttonHref = grupTelegramSmesPeople;
    buttonForm = linkFormSmesPeople
  }

  return {buttonForm, buttonHref, buttonLabel}

};

export default ButtonCTA;
