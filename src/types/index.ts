type UrlType = `${'https' | 'http'}://${string}`;

interface AdvertisementStatsBase {
	id: number;
	type: 'image' | 'text' | 'video';
	impressions: number;
	clicks: number;
	ctr: number;
}

interface AdvertisementMediaStats extends AdvertisementStatsBase {
	url: UrlType;
}

export interface TextAdvertisementStats extends AdvertisementStatsBase {
	type: 'text';
	description: string;
	headline: string;
}

export interface ImageAdvertisementStats extends AdvertisementMediaStats {
	type: 'image';
}

export interface VideoAdvertisementStats extends AdvertisementMediaStats {
	type: 'video';
}


export type AdvertisementStats = TextAdvertisementStats | ImageAdvertisementStats | VideoAdvertisementStats;
export type Maybe<T> = T | undefined;
