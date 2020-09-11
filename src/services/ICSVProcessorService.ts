import { InjectionKey } from "vue";
import { CSVProcessRecipe } from "../models/CSVProcessRecipe";

export interface ICSVProcessorService {
  execute(recipe: CSVProcessRecipe): Promise<string>;
}

export const CSVProcessorServiceKey: InjectionKey<ICSVProcessorService> = Symbol('CSVProcessorService');