/**
 * 平台适配层
 * 提供跨平台的统一 API
 */

import { storageService } from './storage.service';

// 平台类型
export type Platform = 'web' | 'desktop' | 'mobile' | 'ios' | 'android';

// 环境检测
const getPlatform = (): Platform => {
  // Tauri 环境
  if (typeof window !== 'undefined' && '__TAURI__' in window) {
    return 'desktop';
  }
  
  // 移动端检测
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  if (/iPhone|iPad|iPod/i.test(ua)) {
    return 'ios';
  }
  if (/Android/i.test(ua)) {
    return 'android';
  }
  if (/mobile/i.test(ua)) {
    return 'mobile';
  }
  
  return 'web';
};

export const platform = getPlatform();

export const isWeb = platform === 'web';
export const isDesktop = platform === 'desktop';
export const isMobile = platform === 'mobile' || platform === 'ios' || platform === 'android';
export const isIOS = platform === 'ios';
export const isAndroid = platform === 'android';

// ========== 存储适配 ==========

export interface StorageAdapter {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
}

class WebStorageAdapter implements StorageAdapter {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}

class DesktopStorageAdapter implements StorageAdapter {
  // Tauri 使用 same localStorage
  private storage = new WebStorageAdapter();

  get<T>(key: string): T | null {
    return this.storage.get<T>(key);
  }

  set<T>(key: string, value: T): void {
    this.storage.set(key, value);
  }

  remove(key: string): void {
    this.storage.remove(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

class MobileStorageAdapter implements StorageAdapter {
  // 移动端使用 localStorage + sessionStorage
  private local = new WebStorageAdapter();

  get<T>(key: string): T | null {
    return this.local.get<T>(key);
  }

  set<T>(key: string, value: T): void {
    this.local.set(key, value);
  }

  remove(key: string): void {
    this.local.remove(key);
  }

  clear(): void {
    this.local.clear();
  }
}

// 获取当前平台的存储适配器
export const getStorageAdapter = (): StorageAdapter => {
  if (isDesktop) {
    return new DesktopStorageAdapter();
  }
  if (isMobile) {
    return new MobileStorageAdapter();
  }
  return new WebStorageAdapter();
};

// ========== 文件系统适配 ==========

export interface FileInfo {
  name: string;
  path: string;
  size: number;
  type: string;
}

export interface FileSystemAdapter {
  readFile(path: string): Promise<Uint8Array>;
  writeFile(path: string, data: Uint8Array): Promise<void>;
  selectFile(options?: {
    multiple?: boolean;
    accept?: string[];
  }): Promise<FileInfo[]>;
  selectDirectory(): Promise<string>;
  exists(path: string): Promise<boolean>;
}

class WebFileSystemAdapter implements FileSystemAdapter {
  async readFile(path: string): Promise<Uint8Array> {
    // Web 端通过 fetch 读取
    const response = await fetch(path);
    return new Uint8Array(await response.arrayBuffer());
  }

  async writeFile(path: string, data: Uint8Array): Promise<void> {
    // Web 端使用 download 方式
    const blob = new Blob([data]);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = path.split('/').pop() || 'file';
    a.click();
    URL.revokeObjectURL(url);
  }

  async selectFile(options?: {
    multiple?: boolean;
    accept?: string[];
  }): Promise<FileInfo[]> {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = options?.multiple || false;
      input.accept = options?.accept?.join(',') || '*';
      
      input.onchange = async () => {
        const files = input.files || [];
        const results: FileInfo[] = [];
        
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          results.push({
            name: file.name,
            path: URL.createObjectURL(file),
            size: file.size,
            type: file.type
          });
        }
        
        resolve(results);
      };
      
      input.click();
    });
  }

  async selectDirectory(): Promise<string> {
    // Web 端不支持选择目录
    throw new Error('Web 端不支持选择目录');
  }

  async exists(path: string): Promise<boolean> {
    try {
      const response = await fetch(path, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }
}

class DesktopFileSystemAdapter implements FileSystemAdapter {
  // TODO: 实现 Tauri 文件系统 API
  private webAdapter = new WebFileSystemAdapter();

  async readFile(path: string): Promise<Uint8Array> {
    // @tauri-apps/api fs.readFile
    console.log('[Platform] Desktop readFile:', path);
    return new Uint8Array();
  }

  async writeFile(path: string, data: Uint8Array): Promise<void> {
    // @tauri-apps/api fs.writeFile
    console.log('[Platform] Desktop writeFile:', path);
  }

  async selectFile(options?: {
    multiple?: boolean;
    accept?: string[];
  }): Promise<FileInfo[]> {
    // @tauri-apps/api dialog.open
    console.log('[Platform] Desktop selectFile');
    return [];
  }

  async selectDirectory(): Promise<string> {
    // @tauri-apps/api dialog.open
    console.log('[Platform] Desktop selectDirectory');
    return '';
  }

  async exists(path: string): Promise<boolean> {
    // @tauri-apps/api fs.exists
    console.log('[Platform] Desktop exists:', path);
    return false;
  }
}

// 获取当前平台的文件系统适配器
export const getFileSystemAdapter = (): FileSystemAdapter => {
  if (isDesktop) {
    return new DesktopFileSystemAdapter();
  }
  return new WebFileSystemAdapter();
};

// ========== 通知适配 ==========

export interface NotificationAdapter {
  show(options: {
    title: string;
    body?: string;
    icon?: string;
  }): void;
  requestPermission(): Promise<boolean>;
}

class WebNotificationAdapter implements NotificationAdapter {
  show(options: { title: string; body?: string; icon?: string }): void {
    if (Notification.permission === 'granted') {
      new Notification(options.title, {
        body: options.body,
        icon: options.icon
      });
    }
  }

  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) return false;
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
}

class DesktopNotificationAdapter implements NotificationAdapter {
  // 使用 Tauri 通知 API
  show(options: { title: string; body?: string; icon?: string }): void {
    console.log('[Platform] Desktop notification:', options);
    // @tauri-apps/api notification
  }

  async requestPermission(): Promise<boolean> {
    return true;
  }
}

export const getNotificationAdapter = (): NotificationAdapter => {
  if (isDesktop) {
    return new DesktopNotificationAdapter();
  }
  return new WebNotificationAdapter();
};

// ========== 剪贴板适配 ==========

export interface ClipboardAdapter {
  read(): Promise<string>;
  write(text: string): Promise<void>;
}

class WebClipboardAdapter implements ClipboardAdapter {
  async read(): Promise<string> {
    return await navigator.clipboard.readText();
  }

  async write(text: string): Promise<void> {
    await navigator.clipboard.writeText(text);
  }
}

export const getClipboardAdapter = (): ClipboardAdapter => {
  return new WebClipboardAdapter();
};

// ========== 导出平台工具 ==========

export const platformUtils = {
  platform,
  isWeb,
  isDesktop,
  isMobile,
  isIOS,
  isAndroid,
  storage: getStorageAdapter(),
  fileSystem: getFileSystemAdapter(),
  notification: getNotificationAdapter(),
  clipboard: getClipboardAdapter()
};

export default platformUtils;
