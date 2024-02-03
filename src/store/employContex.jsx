import React,{ createContext, useContext, useState } from "react";
import { reqeditEmploye } from "../../employe";

const EmployeContext = createContext();

export const useEmploy = () => {
    const context = useContext(EmployeContext);

    if(!context){
        throw new Error("No context")
    }
    return context;
};

export function EmployProvider({children}){
    const [employee, SeEmployee] = useState([]);

    // Update employee
    const updateEmployeeC = async (id, employe) => {
        try {
            await reqeditEmploye(id, employe);
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <EmployeContext.Provider value={{
            employee,
            updateEmployeeC
        }}>
            {children}
        </EmployeContext.Provider>
    );
}
