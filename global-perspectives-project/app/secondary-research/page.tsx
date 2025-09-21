import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function SecondaryResearchPage() {
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
            Secondary Research
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Statistics Chart Placeholder */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center" style={{ color: "#0B1957" }}>
              Gig Economy vs Permanent Employment Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <span className="text-gray-500">Bar Graph Placeholder</span>
            </div>
          </CardContent>
        </Card>

        {/* Research Summary */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl" style={{ color: "#0B1957" }}>
              Research Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none" style={{ color: "#0B1957" }}>
              <h3 className="text-xl font-bold mb-4">The Rise of the Gig Economy</h3>
              <p className="mb-4">
                The rise of the gig economy, supported by digital platforms such as Uber, Airbnb, Upwork, and FoodPanda,
                has reshaped how people earn and view work. Gig jobs are defined by independence, short-term contracts,
                and the freedom to choose clients or projects, offering workers flexibility and quick income.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                      Global Gig Economy Earnings
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Freelancers average $39/hour globally</li>
                      <li>• Pakistani freelancers: PKR 40,000-50,000/month</li>
                      <li>• Skilled digital workers: up to $20/hour</li>
                      <li>• FoodPanda riders: PKR 35,000-45,000/month</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                      Challenges in Gig Work
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Income instability and market dependency</li>
                      <li>• Average earnings dropped from $220 to $85/month</li>
                      <li>• 70% report lower income than before</li>
                      <li>• No health insurance or pension benefits</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="mb-6">
                These examples show that gig jobs can provide opportunities and financial gains, particularly for those
                with strong skills and experience. However, they also reveal instability, as income varies by platform,
                hours worked, and market demand. Studies in Pakistan highlight this challenge, showing that while some
                workers initially earned slightly higher after switching to gig work, their average earnings eventually
                dropped from about $220 to $85 per month after expenses, with over 70% of educated gig workers reporting
                lower income than before.
              </p>

              <h3 className="text-xl font-bold mb-4">Permanent Employment Advantages</h3>
              <p className="mb-4">
                On the other hand, permanent employment offers greater stability, structured growth, and long-term
                benefits. In Pakistan, the average monthly income for a full-time worker is around PKR 80,000, while
                experienced employees can earn PKR 150,000 or more.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                      Financial Benefits
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Average salary: PKR 80,000/month</li>
                      <li>• Experienced workers: PKR 150,000+/month</li>
                      <li>• Predictable and timely payments</li>
                      <li>• Clear career advancement paths</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                      Additional Benefits
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Health insurance coverage</li>
                      <li>• Pension and retirement plans</li>
                      <li>• Paid leave and holidays</li>
                      <li>• Legal protection against termination</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-bold mb-4">Global Preferences</h3>
              <p className="mb-6">
                Globally, around 82% of workers still favour permanent jobs over freelancing or gig work, as they value
                predictable pay, timely salaries, and clear career advancement. This preference shows that while gig
                work is attractive for flexibility and autonomy, many still prefer the certainty and social protection
                that comes with permanent employment.
              </p>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3" style={{ color: "#0B1957" }}>
                    Conclusion
                  </h4>
                  <p style={{ color: "#0B1957" }}>
                    Overall, gig jobs have succeeded in creating new opportunities and meeting the demand for flexible,
                    short-term work, but their lack of stability, consistent income, and social protection makes them
                    less sustainable as a full-time livelihood. Permanent employment, although less flexible, remains
                    more successful in offering long-term financial security, benefits, and career development, which
                    explains why the majority of workers still view it as the stronger and more sustainable option.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button asChild style={{ backgroundColor: "#0B1957", color: "#F8F3EA" }}>
            <Link href="/primary-research">← View Primary Research</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
