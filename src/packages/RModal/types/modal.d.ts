export interface IModalProps {
  size: string;
  position?: string;
  title: string;
  right_title?:string,
  children: React.ReactNode;
  show: boolean | any;
  setShow?: any;
  custom_class?:any,
  hideHeader?:boolean,
  closeIcon? : any,
  loading? : boolean,
  classes? : string,
  color?:string,
  modal_img?:string,
  img?:string | any
}

export interface IProps {
  children: React.ReactNode;
}
