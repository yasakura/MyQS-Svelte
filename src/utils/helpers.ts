export function deepClone<T>(element: T): T {
	return JSON.parse(JSON.stringify(element)) as T;
}
