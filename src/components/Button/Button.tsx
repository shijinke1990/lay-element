import React from "react";
import classNames from "classnames";
import "./Button.scss";

export enum ButtonType {
    Primary = "primary",
    Danger = "danger",
    Link = "link",
}

export enum ButtonSize {
    Large = "large",
    Medium = "medium",
    Small = "small",
}

type ButtonBasicProps = {
    children?: React.ReactNode;
    disabled?: boolean;
    size?: ButtonSize;
    buttonType?: ButtonType;
    href?: string;
};

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonBasicProps;

type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
    ButtonBasicProps;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    size,
    disabled,
    href,
    buttonType,
    ...restProps
}: ButtonProps) => {
    const classes = classNames("btn", {
        className,
        disabled: disabled && buttonType === ButtonType.Link,
        [`btn-${size}`]: size,
        [`btn-${buttonType}`]: buttonType,
    });

    if (buttonType === ButtonType.Link) {
        return (
            <a className={classes} href={href} {...restProps}>
                {children}
            </a>
        );
    }
    return (
        <button disabled={disabled} className={classes} {...restProps}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    disabled: false,
    size: ButtonSize.Medium,
    buttonType: ButtonType.Primary,
};

export default Button;
