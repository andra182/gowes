import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./ServiceCardDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const ServiceCard = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <section className="service">
      <div className="service__viewport" ref={emblaRef}>
        <div className="service__container">
          {slides.map((item, index) => (
            <div className="service__slide" key={index}>
              <div className="service__slide__number">
                <img src={item.url} alt="" className="rounded-3xl" />
                <p className="text-xl poppins-medium mt-5">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="service__controls">
        <div className="service__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"service__dot".concat(
                index === selectedIndex ? " service__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
