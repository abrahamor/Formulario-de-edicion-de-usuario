import {ChangeEventHandler, createContext} from 'react'

export interface UserForm {
  id: number,
  name: string,
  role: string,
  address: string,
  salary: number,
}
export const initialState: UserForm[] = [ {
    id: 1,
    name: 'Abraham',
    role: 'Developer',
    address: 'calle 4',
    salary: 1000,
},
{
    id: 2,
    name: 'Alejandro',
    role: 'Support',
    address: 'abc123',
    salary: 2000,
},
{
    id: 3,
    name: 'Russell',
    role: 'Developer',
    address: 'abc123',
    salary: 3000,
},
{
    id: 4,
    name: 'Paco',
    role: 'Marketing',
    address: 'abc123',
    salary: 4000,
},
{
    id: 5,
    name: 'Willy',
    role: 'QA',
    address: 'abc123',
    salary: 5000,
},]

export interface UserContextData {
    handleChange: Function | null,
    data: UserForm[],

}

const contextData:UserContextData={
    data: initialState,
    handleChange: null,
}

export const UserContext = createContext<UserContextData>(contextData)