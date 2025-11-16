import { AssetImage, AssetImageEnum } from "@/src/components/common";
import { Footer } from "@/src/components/layout";
import Container from "@/src/components/common/Container";
import BestSelling from "./components/BestSelling";
import TopProducts from "./components/TopProducts";
import FlashSale from "./components/FlashSale";
import IntroduceModal from "./components/IntroduceModal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="hidden md:block relative w-full aspect-[2.492]">
        <AssetImage
          src={AssetImageEnum.BANNER}
          alt="banner"
          fill
        />
      </div>
      <div className="relative w-full aspect-[1.15] md:hidden">
        <AssetImage
          src={AssetImageEnum.MOBILE_BANNER}
          alt="banner"
          fill
        />
      </div>
      <Container>
        <div className="grid gap-dm-40 lg:gap-dm-80 py-dm-40 lg:py-dm-80">
          <BestSelling />
          <TopProducts />
          <FlashSale />
        </div>
      </Container>
      <Footer />
      <IntroduceModal />
    </main>
  );
}
