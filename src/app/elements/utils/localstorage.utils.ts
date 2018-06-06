export const CURRENT_LANGUAGE_KEY = 'currentLanguage';

export class LocalStorageUtils {
    private CURRENT_LANGUAGE_KEY = 'currentLanguage';

    public static getCurrentLanguage(): string {
        return localStorage.getItem('currentLanguage');
    }

    public static setCurrentLanguage(language: string): void {
        localStorage.setItem(CURRENT_LANGUAGE_KEY, language);
    }

}
