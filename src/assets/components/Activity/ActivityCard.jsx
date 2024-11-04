import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./ActivityCardDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const ActivityCard = (props) => {
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
    <section className="activity">
      <div className="activity__viewport" ref={emblaRef}>
        <div className="activity__container">
          {slides.map((index) => (
            <div className="activity__slide" key={index}>
              <div className="activity__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="activity__controls">
        <div className="activity__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"activity__dot".concat(
                index === selectedIndex ? " activity__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityCard;
