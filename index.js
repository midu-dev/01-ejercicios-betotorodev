/* eslint-disable n/no-callback-literal */
const fs = require('node:fs/promises')
const { join, resolve } = require('node:path')

// Ejercicio 2
async function writeFile (filePath, data, callback) {
  const projectFolder = join(__dirname, filePath)

  try {
    await fs.mkdir(projectFolder, { recursive: true })
  } catch (err) {
    console.log(`Error al crear la carpeta, aquí más información => ${err}`)
  }

  try {
    await fs.writeFile(projectFolder, data)
  } catch (err) {
    console.log(`Error al crear el archivo, aquí más información => ${err}`)
  }
  callback()
}

// Ejercicio 3
async function readFileAndCount (word, callback) {
  const folderToRead = process.argv[2] ?? undefined

  if (!folderToRead) {
    callback(new Error('No se ha especificado el path del archivo'), 0)
    return
  }

  if (!word) {
    callback(new Error('No se ha especificado la palabra a buscar'), null)
    return
  }

  let counter = 0

  try {
    const filePath = resolve(folderToRead)
    const response = await fs.readFile(filePath, { encoding: 'utf8' })
    const arrayToLookFor = response.split(' ')
    arrayToLookFor.forEach((item, index) => {
      const foundWord = item.indexOf(word) !== -1
      if (foundWord) {
        counter += 1
      }
    })
  } catch (err) {
    console.log('Error al leer el archivo', err)
  }

  callback(null, counter)
}

module.exports = {
  writeFile,
  readFileAndCount
}
