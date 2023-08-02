// Return JSON without any extra work!
export default defineEventHandler(() => ({
  name: 'Chocolate',
  type: 'Ice Cream',
  ingredients: ['Cream', 'Sugar', 'Cocoa Powder'],
  serving_suggestion: 'In a waffle cone with whipped cream and a cherry on top',
  calories: 250,
}))
