export type TabClickCb = (tabValue: string) => void;

export interface TabItem {
  text: string | number;
  value: string;
  disabled?: boolean;
}
