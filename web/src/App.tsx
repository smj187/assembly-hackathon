import { Header } from "./components/header"
import { Routes, Route } from "react-router-dom"
import { AppView } from "./views/app-view"
import { UploadView } from "./views/upload-view"
import { ExamView } from "./views/exam-view"
import { AppContextProvider } from "./context/app-context"

export const App: React.FC = () => {
  return (
    <AppContextProvider>
      <div className=" bg-slate-50/80 min-h-screen w-full relative">
        <Header />
        <main className="max-w-7xl mx-auto pt-24">
          <Routes>
            <Route path="/" element={<AppView />} />
            <Route path="/upload" element={<UploadView />} />
            <Route path="/exam" element={<ExamView />} />
          </Routes>
        </main>
      </div>
    </AppContextProvider>
  )
}
