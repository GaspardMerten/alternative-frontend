export function fetchApi(path: string, options: RequestInit): Promise<any> {
    return fetch(process.env.NEXT_PUBLIC_BACKEND_URL + path, options).then((response) => {
        if (response.ok) {
            return response.json();
        }
        
        throw new Error(response.statusText);
    });
}