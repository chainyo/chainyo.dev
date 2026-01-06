import { type ClassValue, clsx } from "clsx";
import { get, writable } from "svelte/store";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function createCopyCodeButton() {
	const copied = writable(false);
	const codeString = writable("");
	let copyTimeout: ReturnType<typeof setTimeout> | null = null;

	const copyCode = async () => {
		if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
			return;
		}

		const value = get(codeString);
		if (!value) {
			return;
		}

		try {
			await navigator.clipboard.writeText(value);
			copied.set(true);
			if (copyTimeout) {
				clearTimeout(copyTimeout);
			}
			copyTimeout = setTimeout(() => {
				copied.set(false);
			}, 1500);
		} catch {
			copied.set(false);
		}
	};

	const setCodeString = (node: HTMLElement) => {
		const update = () => {
			const raw = node.textContent ?? "";
			const cleaned = raw.endsWith("\n") ? raw.slice(0, -1) : raw;
			codeString.set(cleaned);
		};

		update();

		return {
			update,
		};
	};

	return { copied, copyCode, codeString, setCodeString };
}
