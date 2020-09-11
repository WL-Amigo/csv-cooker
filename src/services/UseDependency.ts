import { inject, InjectionKey } from "vue";

export function useDependency<T>(key: InjectionKey<T>): T {
  const dep = inject(key);
  if(!dep) {
    throw new Error(`依存関係が正しくセットアップされていません: ${key.description}`);
  }

  return dep;
}