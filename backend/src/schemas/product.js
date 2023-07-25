import joi, { string } from "joi";

export const productSchema = joi.object({
  productName: joi.string().required(),
  price: joi.number().required(),
  originalPrice: joi.number().required(),
  description: joi.string(),
  image: joi
    .required()
    .array()
    .items(
      joi.object({
        url: string(),
        publicId: string(),
      })
    ),
  categoryId: joi.string().required(),
});
