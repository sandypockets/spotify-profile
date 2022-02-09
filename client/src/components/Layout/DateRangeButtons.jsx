import Button from "./Button";

export default function DateRangeButtons({ activeRange, setRangeData }){
  return (
    <div className="flex">
      <div className="mx-2">
        <Button
          onClickHandler={() => setRangeData('long')}
          styleType="underline-when-active"
          activeRange={activeRange}
          itemRange="long"
        >
          All Time
        </Button>
      </div>
      <div className="mx-2">
        <Button
          onClickHandler={() => setRangeData('medium')}
          styleType="underline-when-active"
          activeRange={activeRange}
          itemRange="medium"
        >
          Last 6 Months
        </Button>
      </div>
      <div className="mx-2">
        <Button
          onClickHandler={() => setRangeData('short')}
          styleType="underline-when-active"
          activeRange={activeRange}
          itemRange="short"
        >
          Last 4 Weeks
        </Button>
      </div>
    </div>
  )
}