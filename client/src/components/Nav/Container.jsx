export default function Container({ children }) {
  return (
    <div className="shadow-md shadow-black flex justify-between min-h-full fixed top-0 left-0 w-24">
      {children}
    </div>
  )
}