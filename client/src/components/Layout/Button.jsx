

export default function Button({children, onClickHandler, styleType="none", activeRange, itemRange}) {

  const styles = {
    "none": "bg-transparent text-white border-2 solid border-white rounded-md mt-12 py-6 px-12 text-xs font-semibold uppercase align-middle",
    "pill": "bg-transparent border-2 border-2 border-white border-solid px-6 py-2 rounded-full uppercase text-sm text-white hover:border-green hover:text-green",
    "pill-solid": "bg-green hover:bg-offGreen px-6 py-2 rounded-full uppercase text-sm text-white",
    "underline-when-active": activeRange === itemRange ? "whitespace-nowrap bg-transparent text-white underline underline-offset-4 mb-1 rounded-none" : "rounded-none bg-transparent text-lightGrey mb-1"
  }

  return (
    <>
      <button
        className={styleType ? styles[styleType] : styles['none']}
        onClick={onClickHandler}
      >
        {children}
      </button>
    </>
  )
}