 
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  console.log(webTechs)

  if(webTechs.includes('Sass')){
    let index=webTechs.indexOf('Sass')
    webTechs[index]=webTechs[index].toUpperCase()

  }
  else{
    webTechs.push('Sass to the Array')

  }
  console.log(webTechs)