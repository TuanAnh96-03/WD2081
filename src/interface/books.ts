export interface Book{
    id: number
    name: string
    price: number
    description: string
    image: string
}

export type IBook = Omit<Book,"id">