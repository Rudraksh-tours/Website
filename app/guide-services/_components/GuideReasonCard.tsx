import Image from "next/image";

interface GuideReasonCardProps {
  imgUrl: string;
  title: string;
  description?: string;
  customComponent: React.ReactNode;
}

export const GuideReasonCard = ({
  imgUrl,
  title,
  description,
  customComponent,
}: GuideReasonCardProps) => {
  return (
    <div className="cursor-pointer  overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-72 h-44 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 p-4 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200">
      <div>
      {customComponent}
      </div>
      
      <div>
        <span className="font-bold">{title}</span>
        <p className="line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};
