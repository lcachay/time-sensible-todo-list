export default time => {
   
   if(time >= 6 && time < 12)
      return 'morning'
   
   if(time >= 12 && time < 19)
      return 'afternoon'

   if(time >= 19 && time < 21)
      return 'evening'
   
   return 'night'
}