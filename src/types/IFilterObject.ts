import querystring from "querystring";

//extended the other interface to resolve interface conflict
export interface IFilterObject extends querystring.ParsedUrlQueryInput {
  id?: string;
  type?: string;
}
