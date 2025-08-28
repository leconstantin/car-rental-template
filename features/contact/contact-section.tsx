import Link from 'next/link';
import { PageContainer } from '@/components/custom/page-container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  return (
    <PageContainer>
      <div className="py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <h1 className="mb-12 text-center font-semibold text-4xl lg:text-5xl">
            Help us route your inquiry
          </h1>

          <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
            <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
              <div>
                <h2 className="mb-3 font-semibold text-lg">Collaborate</h2>
                <Link
                  className="text-blue-600 text-lg hover:underline dark:text-blue-400"
                  href="mailto:hello@tailus.io"
                >
                  hello@tailus.io
                </Link>
                <p className="mt-3 text-sm">+243 000 000 000</p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
              <div>
                <h3 className="mb-3 font-semibold text-lg">Press</h3>
                <Link
                  className="text-blue-600 text-lg hover:underline dark:text-blue-400"
                  href="mailto:press@tailus.io"
                >
                  press@tailus.io
                </Link>
                <p className="mt-3 text-sm">+243 000 000 000</p>
              </div>
            </div>
          </div>

          <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]" />
          <form action="" className="border px-4 py-12 lg:px-0 lg:py-24">
            <Card className="mx-auto max-w-lg p-8 sm:p-16">
              <h3 className="font-semibold text-xl">
                Let's get you to the right place
              </h3>
              <p className="mt-4 text-sm">
                Reach out to our sales team! We’re eager to learn more about how
                you plan to use our application.
              </p>

              <div className="mt-12 space-y-6 *:space-y-3 **:[&>label]:block">
                <div>
                  <Label className="space-y-2" htmlFor="name">
                    Full name
                  </Label>
                  <Input id="name" required type="text" />
                </div>
                <div>
                  <Label className="space-y-2" htmlFor="email">
                    Work Email
                  </Label>
                  <Input id="email" required type="email" />
                </div>
                <div>
                  <Label className="space-y-2" htmlFor="country">
                    Country/Region
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">DR Congo</SelectItem>
                      <SelectItem value="2">United States</SelectItem>
                      <SelectItem value="3">France</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="space-y-2" htmlFor="website">
                    Company Website
                  </Label>
                  <Input id="website" type="url" />
                </div>
                <div>
                  <Label className="space-y-2" htmlFor="job">
                    Job function
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a job function" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Finance</SelectItem>
                      <SelectItem value="2">Education</SelectItem>
                      <SelectItem value="3">Legal</SelectItem>
                      <SelectItem value="4">More</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="space-y-2" htmlFor="msg">
                    Message
                  </Label>
                  <Textarea id="msg" rows={3} />
                </div>
                <Button>Submit</Button>
              </div>
            </Card>
          </form>
        </div>
      </div>
    </PageContainer>
  );
}
