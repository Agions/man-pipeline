/**
 * API 客户端
 * 统一的 API 请求处理
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { API_CONFIG } from '../config/app.config';
import { APIResponse, AppError } from '../types';

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      timeout: API_CONFIG.timeout,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 请求拦截器
    this.client.interceptors.request.use(
      (config) => {
        // 可以在这里添加认证信息等
        return config;
      },
      (error) => Promise.reject(error)
    );

    // 响应拦截器
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const config = error.config as AxiosRequestConfig & { retryCount?: number };

        // 重试逻辑
        if (config && (!config.retryCount || config.retryCount < API_CONFIG.retryCount)) {
          config.retryCount = config.retryCount || 0;
          config.retryCount++;

          await new Promise(resolve =>
            setTimeout(resolve, API_CONFIG.retryDelay * config.retryCount)
          );

          return this.client(config);
        }

        return Promise.reject(this.handleError(error));
      }
    );
  }

  private handleError(error: AxiosError): AppError {
    if (error.response) {
      return {
        code: `HTTP_${error.response.status}`,
        message: (error.response.data as { message?: string })?.message || '请求失败',
        details: error.response.data
      };
    }

    if (error.request) {
      return {
        code: 'NETWORK_ERROR',
        message: '网络连接失败，请检查网络设置'
      };
    }

    return {
      code: 'UNKNOWN_ERROR',
      message: error.message || '未知错误'
    };
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> {
    try {
      const response = await this.client.get<T>(url, config);
      return { success: true, data: response.data };
    } catch (error) {
      const appError = error as AppError;
      return { success: false, error: appError.message };
    }
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<APIResponse<T>> {
    try {
      const response = await this.client.post<T>(url, data, config);
      return { success: true, data: response.data };
    } catch (error) {
      const appError = error as AppError;
      return { success: false, error: appError.message };
    }
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> {
    try {
      const response = await this.client.delete<T>(url, config);
      return { success: true, data: response.data };
    } catch (error) {
      const appError = error as AppError;
      return { success: false, error: appError.message };
    }
  }
}

export const apiClient = new APIClient();
