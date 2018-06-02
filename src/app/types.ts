export interface Word {
    _id: string;
    en: string;
    vn: string;
    isMemorized: boolean;
}

export interface AppState {
    count: number;
    words: Word[];
    shouldShowForm: boolean;
    filterMode: string;
}
