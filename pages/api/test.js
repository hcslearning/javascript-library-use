import * as mylib from 'javascript-library'

export default (req, res) => {
  const resultado = mylib.restar(10, 2)
  res.status(200).json({ operacion: '10 - 2 = x', resultado })
}
