import React, { useEffect } from "react";
import cx from "clsx";
import DotIndicator from "@mui-treasury/components/indicator/dot";

interface Props {
  className?: string;
  children: React.ReactNode;
  onIndexChanged?: (index: number) => void;
}

function SlideShow({ className, children, onIndexChanged = (index: number) => {} }: Props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const changeIndex = (index: number) => {
    setCurrentIndex(index);
    onIndexChanged(index);
  }
  return (
    <div className={cx(className, "relative overflow-hidden")}>
      <div
        className="whitespace-nowrap transition duration-1000 ease-in-out"
        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
      >
        {children instanceof Array ? (
          (children as Array<React.ReactNode>).map(
            (child: React.ReactNode, index: number) => (
              <div
                className="
                inline-block
                whitespace-normal
                w-full h-auto rounded-lg
                "
                key={index}
              >
                {child}
              </div>
            )
          )
        ) : (
          <div
            className="
            inline-block
            whitespace-normal
            w-full h-auto rounded-lg
            "
          >
            {children}
          </div>
        )}
      </div>
      {children instanceof Array && (
        <div
          className="absolute
          left-1/2 -translate-x-1/2 bottom-0 z-10"
        >
          {(children as Array<React.ReactNode>).map((_, index) => (
            <DotIndicator
              key={index}
              active={index === currentIndex}
              onClick={() => changeIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SlideShow;
