import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progress-blur";

export default function LogoCloud() {
  return (
    <section className=" overflow-hidden py-16 ">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">
              Poweblue By the Best Tech Companies
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={200} speed={80} gap={112}>
              <div className="flex justify-center items-center h-16">
                <img
                  className="mx-auto h-5 w-fit  dark:invert"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                />
              </div>

              <div className="flex justify-center items-center">
                <img
                  className="mx-auto  h-16 dark:invert "
                  src="/Alienware.jpg"
                  alt="Alienware Logo"
                  height="100"
                  width="auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="mx-auto  h-16 w-fit dark:invert"
                  src="github.jpeg"
                  alt="GitHub Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="mx-auto h-10 w-fit dark:invert"
                  src="/intel.png"
                  alt="Intel-Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="mx-auto  h-10 w-fit dark:invert"
                  src="/amd.jpg"
                  alt="AMD-Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="mx-auto  h-16 w-fit dark:invert"
                  src="/Corsair.png"
                  alt="Corsair-Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="mx-auto h-16 w-fit "
                  src="/acer.jpg"
                  alt="Acer Logo"
                  height="28"
                  width="auto"
                />
              </div>

              <div className="flex justify-center items-center ">
                <img
                  className="mx-auto  h-16 w-fit"
                  src="/asus.jpg"
                  alt="Asus Logo"
                  height="24"
                  width="auto"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
