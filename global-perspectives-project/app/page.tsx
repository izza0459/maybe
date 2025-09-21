import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#9ECCFA" }}>
      {/* Header Banner */}
      <header className="py-8 px-4" style={{ backgroundColor: "#0B1957" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#F8F3EA" }}>
            A GLOBAL PERSPECTIVES PROJECT
          </h1>
          <p className="text-xl md:text-2xl font-medium" style={{ color: "#E6D8C7" }}>
            WE AIM TO EXPLORE WHETHER THE RISE IN THE TREND OF GIG JOBS IS THREATENING PERMANENT EMPLOYMENT
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#0B1957" }}>
                Primary Research
              </h2>
              <p className="mb-6" style={{ color: "#0B1957" }}>
                Interviews with permanent employees at Haris Engineering Concern PTV Ltd
              </p>
              <Button asChild className="w-full" style={{ backgroundColor: "#0B1957", color: "#F8F3EA" }}>
                <Link href="/primary-research">View Primary Research</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#0B1957" }}>
                Secondary Research
              </h2>
              <p className="mb-6" style={{ color: "#0B1957" }}>
                Statistical analysis and global trends in gig economy vs permanent employment
              </p>
              <Button asChild className="w-full" style={{ backgroundColor: "#0B1957", color: "#F8F3EA" }}>
                <Link href="/secondary-research">View Secondary Research</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Team Roles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#0B1957" }}>
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0B1957" }}>
                  Adeena
                </h3>
                <p className="text-sm" style={{ color: "#0B1957" }}>
                  Group leader who divided tasks, tracked deadlines, and contributed to secondary research through
                  documentaries.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0B1957" }}>
                  Fatima
                </h3>
                <p className="text-sm" style={{ color: "#0B1957" }}>
                  Evidence collection specialist who organizes group work and provides pre-existing research
                  information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0B1957" }}>
                  Zaina
                </h3>
                <p className="text-sm" style={{ color: "#0B1957" }}>
                  Team diary maintainer who records activities and progress while researching the topic.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0B1957" }}>
                  Shanzey
                </h3>
                <p className="text-sm" style={{ color: "#0B1957" }}>
                  Interview conductor and Instagram manager, researching gig work income levels and success stories.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#0B1957" }}>
                  Farin
                </h3>
                <p className="text-sm" style={{ color: "#0B1957" }}>
                  Team diary maintainer and secondary research compiler, organizing findings to support the project.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* External Links */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#0B1957" }}>
            Project Resources
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              className="border-2 bg-transparent"
              style={{ borderColor: "#0B1957", color: "#0B1957" }}
            >
              <a
                href="https://drive.google.com/drive/folders/1bngvIsauxD77nSi_82QSgCU6SeC_rnKt"
                target="_blank"
                rel="noopener noreferrer"
              >
                📁 Google Drive
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 bg-transparent"
              style={{ borderColor: "#0B1957", color: "#0B1957" }}
            >
              <a href="https://www.instagram.com/gigwork.voices/" target="_blank" rel="noopener noreferrer">
                📸 Instagram Page
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
