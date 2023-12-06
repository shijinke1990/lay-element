import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";

export type MenuItemProps = {
    index?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode;
    className?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ index, disabled, style, children, className }: MenuItemProps) => {
    const context = useContext(MenuContext);
    const classes = classNames("lay__menu-item", {
        "lay__menu-item--active": context.activeIndex === index,
        "lay__menu-item--disabled": disabled,
        className,
    });

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log(index, context);
        if (disabled) return;
        if (context.onItemClick && typeof index === "string") {
            context.onItemClick(index);
            console.log(index);
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
