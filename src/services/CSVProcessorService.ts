import { CSVInput } from "../models/CSVInput";
import { CSVProcessRecipe } from "../models/CSVProcessRecipe";
import { ICSVProcessorService } from "./ICSVProcessorService";
import Papaparse from "papaparse";
import { CSVProcessDefinition } from "../models/CSVProcessDefinition";

type PossibleValueType = string | number | boolean;

export class CSVProcessorService implements ICSVProcessorService {
  public async execute(recipe: CSVProcessRecipe): Promise<string> {
    let data = await this.loadCSV(recipe.input);
    data = this.processTable(data, recipe.processDefs);
    return Papaparse.unparse(data, {
      delimiter: '\t',
    });
  }

  private async loadCSV(inputDef: CSVInput): Promise<PossibleValueType[][]> {
    if (inputDef.inputType === 'string') {
      return await new Promise((res, rej) => {
        Papaparse.parse(inputDef.data, {
          worker: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete(result) {
            if(result.errors.length > 0) {
              rej(result.errors[0].message);
            }
            res(result.data as PossibleValueType[][]);
            return;
          }
        })
      })
    } else if (inputDef.inputType === 'file') {
      throw new Error('ファイルから読み込みは未実装です')
    }

    throw new Error('到達しないはずのコードに到達しました');
  }

  private processTable(input: PossibleValueType[][], processDefs: CSVProcessDefinition[]): PossibleValueType[][] {
    for(const def of processDefs) {
      switch(def.type) {
        case 'sum-by-key':
          input = this.processSumByKey(input, def.keyColumnNum);
          break;
          case 'replace-by-regex': 
          input = this.processReplace(input, def.targetColumnNum, def.regexString, def.replaceString);
      }
    }

    return input;
  }

  private processSumByKey(input: PossibleValueType[][], keyIndex: number): PossibleValueType[][] {
    const map = new Map<string, PossibleValueType[]>();

    for(const row of input) {
      const key = String(row[keyIndex]);
      const values = Array.from(row);
      values.splice(keyIndex, 1);

      if(map.has(key)) {
        const prevValues = map.get(key)!;
        map.set(key, values.map((v, i) => {
          const prevValue = prevValues[i];
          if(typeof v === 'number' && typeof prevValue === 'number') {
            return v + prevValue;
          }
          return [v, prevValue].join(', ')
        }))
      } else {
        map.set(key, values);
      }
    }

    // 復元
    return Array.from(map).map((kvp) => {
      const values = kvp[1];
      values.splice(keyIndex, 0, kvp[0]);
      return values;
    })
  }

  private processReplace(input: PossibleValueType[][], targetIndex: number, regexString: string, replaceString: string): PossibleValueType[][] {
    return input;
  }
}