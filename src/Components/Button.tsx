import { buttonProps } from '../Types/WeatherTypes'

function Button({lat,lon}:buttonProps) {
  return (
    <div className="mt-5 text-center">
          <a className=" text-slate-50 bg-blue-500  py-2 px-4 rounded-md" href={`https://www.google.com/maps/@${lat},${lon},12z`}>باز کردن منطقه در گوگل</a>
    </div>
  )
}

export default Button