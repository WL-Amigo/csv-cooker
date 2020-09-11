export type CSVInput = {
  inputType: 'string';
  data: string;
} | {
  inputType: 'file';
  path: string;
}