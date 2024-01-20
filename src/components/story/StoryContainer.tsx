import { ReactNode } from "react";

interface StoryContainerProps {
    children: ReactNode;
  }
  
const StoryContainer: React.FC<StoryContainerProps> = ({ children }) => {
    return (
      <div className="md:w-[590px] sm:w-[450px] w-9/12 h-full relative mx-auto">
        {children}
      </div>
    );
};

export default StoryContainer;