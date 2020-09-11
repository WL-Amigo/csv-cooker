import { provide } from "vue";
import { CSVProcessorService } from "./CSVProcessorService";
import { CSVProcessorServiceKey } from "./ICSVProcessorService";

export function setupDependencies() {
  provide(CSVProcessorServiceKey, new CSVProcessorService());
}