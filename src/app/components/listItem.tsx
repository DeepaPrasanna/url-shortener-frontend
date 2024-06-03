import { MouseEventHandler, ReactNode } from "react";

const ListItem = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLLIElement>;
}) => {
  return (
    <li
      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default ListItem;
