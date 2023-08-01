interface IceCreamFlavor {
  name: string
  type: string
  ingredients: string[]
  serving_suggestion: string
  calories: number

}

const flavors: IceCreamFlavor[] = [
  {
    name: 'Chocolate',
    type: 'Ice Cream',
    ingredients: ['Cream', 'Sugar', 'Cocoa Powder'],
    serving_suggestion: 'In a waffle cone with whipped cream and a cherry on top',
    calories: 250,
  },
  {
    name: 'Vanilla',
    type: 'Ice Cream',
    ingredients: ['Cream', 'Sugar', 'Vanilla Extract'],
    serving_suggestion: 'In a waffle cone with chocolate syrup and sprinkles',
    calories: 200,
  },
  {
    name: 'Strawberry',
    type: 'Ice Cream',
    ingredients: ['Cream', 'Sugar', 'Strawberry Puree'],
    serving_suggestion: 'In a bowl with fresh sliced strawberries',
    calories: 225,
  },
]

export default defineEventHandler(async (event): Promise<IceCreamFlavor | undefined> => {
  const { flavor } = <any>event.context.params
  if (event)
    return flavors.find(flavors => flavors.name.toLowerCase() === flavor.toLowerCase())
})
