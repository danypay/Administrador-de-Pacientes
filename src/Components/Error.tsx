
export default function Error({children} : {children : React.ReactNode}) {
  return (
    <p className="uppercase text-center my-4 bg-red-600 text-white font-bold text-sm p-3">{children}</p>
  )
}
