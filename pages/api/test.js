import * as mylib from 'javascript-library'
import * as tslib from 'typescript-library'

export default (req, res) => {
  const resultado = mylib.restar(10, 2)
  const division = "40 / 10 = x"
  const resultadoDivision = tslib.dividir(40, 10)
  res.status(200).json({ operacion: '10 - 2 = x', resultado, division, resultadoDivision })
}
