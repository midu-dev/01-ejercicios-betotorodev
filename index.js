const fs = require("node:fs/promises")
const { join } = require("node:path")

// Ejercicio 2
async function writeFile(filePath, data, callback) {
  const projectFolder = join(__dirname, filePath)

  try {
    await fs.mkdir(projectFolder, { recursive: true })
  } catch(err) {
    console.log(`Error al crear la carpeta, aquí más información => ${err}`)
  }

  try {
    await fs.writeFile(projectFolder, data)
  } catch(err) {
    console.log(`Error al crear el archivo, aquí más información => ${err}`);
  }
  callback()
}

// Ejercicio 3
async function readFileAndCount(word, callback) {}

module.exports = {
  writeFile,
  readFileAndCount
}