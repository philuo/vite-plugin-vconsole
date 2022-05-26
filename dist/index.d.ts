import { Plugin } from '@yuo/vite';

interface viteVConsoleOptions {
    entry: string[] | string;
    localEnabled?: boolean;
    enabled?: boolean;
    config?: voption;
}
interface voption {
    defaultPlugins?: string[];
    onReady?: () => void;
    onClearLog?: () => void;
    maxLogNumber?: number;
    disableLogScrolling?: boolean;
    theme?: 'light' | 'dark';
}

declare function viteVConsole(opt: viteVConsoleOptions): Plugin;

export { viteVConsole, viteVConsoleOptions, voption };
