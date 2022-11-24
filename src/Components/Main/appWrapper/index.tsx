import { FC } from "react";
import { IMain } from "../../../Types/common";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const AppWrapper: FC<IMain> = ({ children }) => {
       return (
         <div>
           <Header />
           <div className="container body">{children}</div>
           <Footer />
         </div>
       );
     };