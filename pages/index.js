import * as mylib from 'javascript-library'
import * as tslib from 'typescript-library'

export default function Home() {
  const resultado = mylib.sumar(1, 2)
  const mul = tslib.multiplicar(3, 6)
  return (
    <>
    <div>La suma de 1 + 2 = {resultado}</div>
    <div>3 * 6 = {mul}</div>
    </>
  )
}
