const country = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  console.log(country)
  if(country.includes('Ethiopia')){
    let index=country.indexOf('Ethiopia')
    country[index]=country[index].toUpperCase()
  }
  else{
    country.push('Ethiopia')
  }
  
  console.log(country)

  console.log(country.slice(10,11))
  console.log(country)
  let sizee=country.length
  console.log(country[Math.floor(sizee/2)])
 