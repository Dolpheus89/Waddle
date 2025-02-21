import style from "./Button.module.scss"

export type ButtonProps = {
	children?: string;
};

/** A button */
export function Button({children} : ButtonProps) {
	return (
		<button type="button" className={style.button}>
			{children}
		</button>
	);
}
