import QueryProvider from './app/providers/query-provider'

function App() {
  return (
    <QueryProvider>
      <div className="p-10">
        <h1 className="text-3xl font-bold">
          AI Construction Daily Report System
        </h1>
      </div>
    </QueryProvider>
  )
}

export default App