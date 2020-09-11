import { CSVInput } from "./CSVInput";
import { CSVProcessDefinition } from "./CSVProcessDefinition";

export type CSVProcessRecipe = {
  input: CSVInput;
  processDefs: CSVProcessDefinition[];
}