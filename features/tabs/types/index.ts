export type TabClickCb = (tabValue: string) => void;

export interface TabItem {
  text: string;
  value: string;
  disabled?: boolean;
}
