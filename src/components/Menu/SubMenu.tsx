import React, { CSSProperties, FC, ReactNode, useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";

type SubMenuProps = {
    title: string;
    index?: string;
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
};

const SubMenu: FC<SubMenuProps> = ({ title, index, children, style, className }: SubMenuProps) => {
    const context = useContext(MenuContext);
    const openedSubMenuIndex = context.defaultOpenSubMenus as string[];
    const isOpened = index && context.mode === "vertical" ? openedSubMenuIndex.includes(index) : false;
    const [opened, setOpened] = useState(isOpened);
    const classes = classNames("lay__submenu", {
        "lay__submenu--active": context.activeIndex === index,
        className,
    });

    const renderChildren = () => {
        const childrenComponent = React.Children.map(children, (child, childIndex) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index: `${index}-${childIndex}`,
                });
            }
            console.error("submenu的子组件只能是menuItem");
        });
        return <ul className="lay__submenu-list">{childrenComponent}</ul>;
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpened(!opened);
        if (context.onItemClick && index) {
            context.onItemClick(index);
        }
    };

    let timer: NodeJS.Timeout;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        e.preventDefault();
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            setOpened(toggle);
        }, 300);
    };

    const clickEvents =
        context.mode === "vertical"
            ? {
                  onClick: handleClick,
              }
            : {};

    const hoverEvents =
        context.mode === "horizontal"
            ? {
                  onMouseEnter: (e: React.MouseEvent) => {
                      handleMouse(e, true);
                  },
                  onMouseLeave: (e: React.MouseEvent) => {
                      handleMouse(e, false);
                  },
              }
            : {};

    return (
        <li className={classes} style={style} {...hoverEvents}>
            <div className="lay__submenu-title" {...clickEvents}>
                {title}
            </div>
            {opened && <>{renderChildren()}</>}
        </li>
    );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
