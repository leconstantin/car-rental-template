import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/custom/page-container';

const members = [
  {
    name: 'Liam Brown',
    role: 'Founder - CEO',
    avatar: 'https://alt.tailus.io/images/team/member-one.webp',
    link: '#',
  },
  {
    name: 'Elijah Jones',
    role: 'Co-Founder - CTO',
    avatar: 'https://alt.tailus.io/images/team/member-two.webp',
    link: '#',
  },
  {
    name: 'Isabella Garcia',
    role: 'Sales Manager',
    avatar: 'https://alt.tailus.io/images/team/member-three.webp',
    link: '#',
  },
  {
    name: 'Henry Lee',
    role: 'UX Engeneer',
    avatar: 'https://alt.tailus.io/images/team/member-four.webp',
    link: '#',
  },
  {
    name: 'Ava Williams',
    role: 'Interaction Designer',
    avatar: 'https://alt.tailus.io/images/team/member-five.webp',
    link: '#',
  },
  {
    name: 'Olivia Miller',
    role: 'Visual Designer',
    avatar: 'https://alt.tailus.io/images/team/member-six.webp',
    link: '#',
  },
];

export default function TeamSection() {
  return (
    <PageContainer>
      <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
        <div className="mx-auto max-w-5xl border-t px-6">
          <span className="-ml-6 -mt-3.5 block w-max bg-gray-50 px-6 text-caption dark:bg-gray-950">
            Team
          </span>
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <div className="sm:w-2/5">
              <h2 className="font-bold text-3xl sm:text-4xl">Our dream team</h2>
            </div>
            <div className="mt-6 sm:mt-0">
              <p>
                During the working process, we perform regular fitting with the
                client because he is the only person who can feel whether a new
                suit fits or not.
              </p>
            </div>
          </div>
          <div className="mt-12 md:mt-24">
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => (
                <div className="group overflow-hidden" key={member.name}>
                  <Image
                    alt="team member"
                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                    height="1239"
                    src={member.avatar}
                    width="826"
                  />
                  <div className="px-2 pt-2 sm:pt-4 sm:pb-0">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-base transition-all duration-500 group-hover:tracking-wider">
                        {member.name}
                      </h3>
                      <span className="text-xs">_0{index + 1}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="inline-block translate-y-6 text-muted-foreground text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {member.role}
                      </span>
                      <Link
                        className="inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:text-primary-600 group-hover:opacity-100 dark:group-hover:text-primary-400"
                        href={member.link}
                      >
                        {' '}
                        Linktree
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
