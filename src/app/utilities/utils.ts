export function toBase64(file: File) {
    return new Promise((resolve: (value?: any) => void, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    })
}

