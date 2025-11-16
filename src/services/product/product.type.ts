export interface Product {
  id: string
  name: string
  image?: string
}

export interface BestSellingProduct {
  id: string
  ranking: number
  name: string
  quantity: number
  revenue: number
}
