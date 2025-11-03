/**
 * Save a value to localStorage
 * @param key The key under which the value is stored
 * @param value The value to store (will be serialized as JSON)
 */
export function setToLocalStorage<T>(key: string, value: T): void {
	if (import.meta.server) return;
	try {
		const serializedValue = JSON.stringify(value);
		window.localStorage.setItem(key, serializedValue);
	} catch (e) {
		console.error(`Error saving to localStorage with key '${key}':`, e);
	}
}

/**
 * Retrieve a value from localStorage
 * @param key The key under which the value is stored
 * @returns The parsed value, or null if not found or on error
 */
export function getFromLocalStorage<T>(key: string): T | null {
	if (import.meta.server) return null;
	try {
		const item = window.localStorage.getItem(key);
		if (item === null) return null;
		return JSON.parse(item) as T;
	} catch (e) {
		console.error(`Error reading from localStorage with key '${key}':`, e);
		return null;
	}
}

/**
 * Remove a value from localStorage
 * @param key The key to remove
 */
export function removeFromLocalStorage(key: string): void {
	if (import.meta.server) return;
	try {
		window.localStorage.removeItem(key);
	} catch (e) {
		console.error(`Error removing from localStorage with key '${key}':`, e);
	}
}
