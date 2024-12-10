import { TOKEN_KEY } from '@/config/user';
export const setStorageItemWithExpiry = (value) => {
    localStorage.setItem(TOKEN_KEY, `Bearer ${value}`);
};
export const getStorageItemWithExpiry = () => {
    try {
        const item = localStorage.getItem(TOKEN_KEY);
        if (!item) {
            return null;
        }
        return item;
    }
    catch {
        return null;
    }
};
export const clearStorageItem = () => {
    try {
        localStorage.removeItem(TOKEN_KEY);
    }
    catch {
        console.error('Failed to remove item from localStorage');
    }
};
//# sourceMappingURL=localStorageHelpers.js.map