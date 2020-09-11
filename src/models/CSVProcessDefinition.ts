type SumByKey = {
  type: 'sum-by-key';
  keyColumnNum: number;
}

type ReplaceByRegex = {
  type: 'replace-by-regex';
  targetColumnNum: number;
  regexString: string;
  replaceString: string;
}

export type CSVProcessDefinition = SumByKey | ReplaceByRegex;