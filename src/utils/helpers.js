export const formatPrice = (number) => {
 const newNumber = Intl.NumberFormat("fr-SN",{
  style:"currency",
  currency:"XOF",
 }).format(number/100)
 return newNumber

}

export const getUniqueValues = (data,type) => {
 let unique = data.map((item) => item[type])
 if(type === "colors"){
  unique= unique.flat()
 }
return["tous",...new Set(unique)]
}
