export interface ICity {
	id: string;
	name: string;
}

export interface IData {
	searchContext: Record<string, string | number>;
	result: ICity[];
}

export interface IDebounce {
	value: string;
	delay: number;
}