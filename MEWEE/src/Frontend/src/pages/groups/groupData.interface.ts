export interface dataSideBarTypes {
  id: number;
  url: string;
  text: string;
}

export interface groupDataPropTypes {
  data: dataSideBarTypes[];
  onCategoryChanged: (id: number) => void;
}

export interface dataGroupItemTypes {
  groups: any;
  members: any;
}

export interface dataGroupItemPropTypes {
  category: number;
  data: any;
}
