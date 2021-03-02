const banglaSlug = (str) => {
  return str
    .toLowerCase()
    .replace(/[,':;?!~`$%&*@*।.ঃ‘’()-_{}"]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
}

console.log(banglaSlug('ডি-৮ দিয়ে  - [নতুন(K)}  - বলয়ের সূচনা?'))
