import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";

export type MenuItemProps = {
    index?: number;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    children?: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({ index, className, style, disabled, children }: MenuItemProps) => {
    const menuContext = useContext(MenuContext);
    const classes = classNames("lay__menu-item", {
        "lay__menu-item--active": index === menuContext.activeIndex,
        "lay__menu-item--disabled": disabled,
        className,
    });

    const handleClick = () => {
        if (disabled) return;
        if (menuContext.onItemClick && typeof index === "number") {
            menuContext.onItemClick(index);
        }
    };
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
