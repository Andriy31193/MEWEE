export interface dropdownTabsDataTypes {
  id: string;
  title: string;
  item: string;
}

export interface dropdownTabsPropsTypes {
  dropdownTabsData: dropdownTabsDataTypes[];
}

export interface switchTabsDataTypes {
  id: string;
  title: string;
  switchActive: boolean;
  description?: string;
}

export interface switchTabsPropsTypes {
  switchTabsData: switchTabsDataTypes[];
}
