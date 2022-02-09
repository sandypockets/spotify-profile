const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://some-production-url.com/login';

export default function Auth() {
  return (
    <main className="flex flex-col justify-center text-center mt-52 ">
      <div>
        <h1 className="text-7xl">Spotify Profile App</h1>
        <a className="inline-block bg-green text-white rounded-full py-4 px-8 mt-12 mb-12 w-60 uppercase text-center hover:bg-offGreen" href={LOGIN_URI}>Log in to Spotify</a>
      </div>
    </main>
  )
}
