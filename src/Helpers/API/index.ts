import axios from "axios";
import { IAddSmeta, ISmeta } from "../../Types/TodoTypes/Todo.interface";
import { API_SMETA, JSON_SMETA } from "../../Constants/API/url";

export const SmetaServices = {
   async getSmeta() {
      return axios
         .get<ISmeta[]>(JSON_SMETA)
         .then((res) => {
            return res.data
         })
         .catch((e) => {
            throw e
         })
   },
   async getSmetaByID(id?: string) {
      return axios
         .get<ISmeta[]>(API_SMETA(id))
         .then((res) => {
            return res.data
         })
         .catch((e) => {
            throw e
         })
   },
   async addSmeta(data: IAddSmeta) {
      return axios
         .post(JSON_SMETA, data)
         .then((res) => {
            return res.data
         })
         .catch((e) => {
            throw e
         })
   }
}