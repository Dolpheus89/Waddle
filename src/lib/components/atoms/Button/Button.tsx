import classNames from "classnames";
import styles from "./Button.module.scss";

export type ButtonProps = {
	children: string;
	variant?: "outlined" | "text" | "contained";
	size?: "sm" | "m" | "l";
	color?: "primary" | "secondary" | "success" | "danger";
	className?: string;
	/** Indicates if the button is disabled */
	disabled?: boolean;
	/** Indicates if the button is in a loading state */
	loading?: boolean;
};

/** A button */
export function Button({
	children,
	variant = "contained",
	size = "m",
	color = "primary",
	className,
	disabled,
	loading = false,
	...rest
}: ButtonProps) {
	return (
		<button
			type="button"
			className={classNames(
				styles.button,
				styles[variant],
				styles[size],
				styles[color],
				loading && styles.loading,
				className,
			)}
			disabled={disabled || loading}
			aria-busy={loading}
			{...rest}
		>
			{children}
		</button>
	);
}
