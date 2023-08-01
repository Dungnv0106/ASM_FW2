export interface IProduct {
    id: string,
    productName: string,
    originalPrice: number,
    description: string,
    image: [{
        url: string,
        publicId: string
    }],
    categoryId: string

}