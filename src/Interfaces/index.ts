export interface Todo {
    name: string,
    id: number,
    isComplate: boolean
}
export interface Todos extends Todo {}[]