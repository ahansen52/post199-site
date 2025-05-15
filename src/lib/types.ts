export type SanityMediaItem = {
	_key: string;
	_type: 'image' | 'file';
	title?: string;
	description?: string;
	asset: {
		url: string;
	};
};

export type HistoricalMomentType = {
	_id: string;
	year: number;
	month: number;
	day?: number;
	title: string;
	description?: string;
	media: SanityMediaItem[];
};

export type DownloadFormType = {
	_id: string;
	title: string;
	description: string;
	fileUrl: string;
	icon: string; // Name of the lucide icon
};
