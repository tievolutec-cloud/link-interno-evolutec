import LinkHub from "@/components/LinkHub";
import { links, siteConfig } from "@/data/site";

export default function Home() {
  return <LinkHub config={siteConfig} links={links} />;
}
