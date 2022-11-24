// API
export const JSON_API: string = 'http://localhost:3004';
export const JSON_SMETA: string = `${JSON_API}/smeta`;

export const API_SMETA = (id?: string) => JSON_SMETA + '/' + id;
