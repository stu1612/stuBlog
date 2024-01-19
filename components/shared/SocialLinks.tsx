import { socialLinks } from "@/constants";

export default function SocialLinks() {
  return socialLinks.map((link) => (
    <a
      href={link.url}
      key={link.id}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-2"
    >
      {link.icon}
    </a>
  ));
}
