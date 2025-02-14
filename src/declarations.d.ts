declare module '*.jpg';
declare module '*.png';

declare module '../Home/style' {
	import { CSSProperties } from 'react';
	export const DropdownContainer: React.FC;
	export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>>;
	export const Option: React.FC<React.OptionHTMLAttributes<HTMLOptionElement>>;
}
