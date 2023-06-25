type TechBadgeProps = {
  name: string;
};

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-gray-50 bg-red-900/40 text-sm py-1 px-3 rounded-lg">
      {name}
    </span>
  );
};
