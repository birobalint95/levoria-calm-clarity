import whatsapp from "@/assets/brands/whatsapp.svg";
import viber from "@/assets/brands/viber.svg";
import telegram from "@/assets/brands/telegram.svg";
import instagram from "@/assets/brands/instagram.svg";
import facebook from "@/assets/brands/facebook.svg";
import gmail from "@/assets/brands/gmail.svg";
import tiktok from "@/assets/brands/tiktok.svg";

const map: Record<string, { src: string; color: string; label: string }> = {
  whatsapp: { src: whatsapp, color: "#25D366", label: "WhatsApp" },
  viber:    { src: viber,    color: "#7360F2", label: "Viber" },
  telegram: { src: telegram, color: "#26A5E4", label: "Telegram" },
  instagram:{ src: instagram,color: "#E4405F", label: "Instagram" },
  facebook: { src: facebook, color: "#1877F2", label: "Facebook" },
  gmail:    { src: gmail,    color: "#EA4335", label: "Gmail" },
  tiktok:   { src: tiktok,   color: "#000000", label: "TikTok" },
};

interface BrandIconProps {
  name: keyof typeof map;
  size?: number;
  className?: string;
  colored?: boolean;
}

export const BrandIcon = ({ name, size = 20, className = "", colored = true }: BrandIconProps) => {
  const brand = map[name];
  if (!brand) return null;
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: colored ? brand.color : "currentColor",
        WebkitMaskImage: `url(${brand.src})`,
        maskImage: `url(${brand.src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-label={brand.label}
      role="img"
    />
  );
};

export const brandLabel = (name: string) => map[name]?.label ?? name;
