import * as mylib from 'javascript-library'

export default function Home() {
  const resultado = mylib.sumar(1, 2)
  return (
    <div>La suma de 1 + 2 = {resultado}</div>
  )
}
