import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function PrimaryResearchPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#9ECCFA" }}>
      {/* Header Banner */}
      <header className="py-8 px-4" style={{ backgroundColor: "#0B1957" }}>
        <div className="max-w-6xl mx-auto">
          <Button asChild variant="ghost" className="mb-4" style={{ color: "#F8F3EA" }}>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-center" style={{ color: "#F8F3EA" }}>
            Primary Research
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Interview Details */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center" style={{ color: "#0B1957" }}>
              Interview with Permanent Employees
            </CardTitle>
            <p className="text-center text-lg" style={{ color: "#0B1957" }}>
              Haris Engineering Concern PTV Ltd - September 17, 2025
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Interview Image Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-8">
              <span className="text-gray-500">Interview Photo</span>
            </div>

            {/* Key Findings */}
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#0B1957" }}>
                Key Findings from Our Interviews
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                      Why They Choose Permanent Employment
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: "#0B1957" }}>
                      <li>• Lack of experience for independent work</li>
                      <li>• Not mentally prepared for business risks</li>
                      <li>• Prefer working under supervision to gain experience</li>
                      <li>• Value skill development opportunities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                      Benefits They Value
                    </h4>
                    <ul className="space-y-2 text-sm" style={{ color: "#0B1957" }}>
                      <li>• Fixed salary for family support</li>
                      <li>• Paid leave benefits</li>
                      <li>• Health insurance coverage</li>
                      <li>• Job security and stability</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                    Work Environment Impact
                  </h4>
                  <p style={{ color: "#0B1957" }}>
                    Employees shared that working under supervision creates productive pressure that helps them maintain
                    order and complete work on time. The structured environment motivates them and provides clear
                    expectations, which they feel is lacking in freelance or gig work where self-discipline is crucial.
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                    Financial Security Concerns
                  </h4>
                  <p style={{ color: "#0B1957" }}>
                    A significant factor influencing their preference for permanent jobs is the guaranteed fixed salary.
                    They expressed concerns about the unpredictable income in gig work or freelancing, where profit and
                    loss responsibility lies entirely with the individual. The assurance of stable income allows them to
                    confidently support themselves and their families.
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                    Cultural and Educational Factors
                  </h4>
                  <p style={{ color: "#0B1957" }}>
                    Interviewees mentioned that their mindset was developed from early on to pursue "proper jobs"
                    (traditional employment). They noted a lack of awareness and knowledge about alternative work
                    arrangements like freelancing or entrepreneurship during their educational years, which influenced
                    their career choices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button asChild style={{ backgroundColor: "#0B1957", color: "#F8F3EA" }}>
            <Link href="/secondary-research">View Secondary Research →</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
