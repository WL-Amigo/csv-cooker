export type SelectedStep = {
  type: 'input';
} | {
  type: 'definition';
  index: number;
} | {
  type: 'output';
}