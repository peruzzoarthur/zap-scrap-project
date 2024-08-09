import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ImgCarouselProps = {
  urlArray: string[];
};

const ImgCarousel = ({ urlArray }: ImgCarouselProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {urlArray.map((url) => (
          <CarouselItem>
            <img src={url} alt={url} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImgCarousel;
