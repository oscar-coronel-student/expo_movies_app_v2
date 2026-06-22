export interface MovieResponse <T> {
    dates:         Dates;
    page:          number;
    total_pages:   number;
    total_results: number;
    results:       T[];
}

export interface Dates {
    maximum: string;
    minimum: string;
}