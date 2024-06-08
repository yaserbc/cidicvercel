import Image from "next/image";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hello from Yaser!
          <code className="font-mono font-bold"></code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div>
       <p>
     <br/> ANSWER 1:
     <br/> 5 Most favourite support task:
     <p>
     <br/> 1.Work with engineering teams during incidents and provide updates to internal and external stakeholders.
      <br/> 2.Work with 3rd party partners to track down a tricky situation for a joint customer.
      <br/> 3.Analyze hundreds of support tickets to spot trends the product team can use.
      <br/> 4. Identify, file (and, where possible, resolve) bugs in private and public Vercel Next.js repos on GitHub.
      <br/> 5.Work with people to figure out if Vercel is suitable for their use case.
      </p>

      <br/> 5 least favourite support task:
      <p>
      <br/> 1.Help resolve billing issues for customers.
      <br/> 2.Create video tutorials to help teach users a specific feature or use case.
      <br/> 3.Find and recruit teammates for the support team.
      <br/> 4. Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites.
      <br/> 5.Manage a support team.
      </p>

      <br/> ANSWER 2: What I wanted to learn or do more of at work is to get to know my colleagues better. I wanted to build relationship
      to as many colleagues as I could because I know that it will help me with my work.
      <br/> ANSWER 3: I was running a change which was handed over from a different region. The case was a very long pending case.
    Because I was new I was not familiar with some hiccups that may happen.As I was running the script from the UI the page just froze up and went on a blank screen. I was not sure if the script ran successfully and I could not rerun it as it would mess up the system. Then I thought of checking the localhost logs. From there
      I was able to see that the script was still running and I just needed to monitor it from the logs instead.

     <br/> ANSWER 4:
     <br/> ANSWER 5:
     <br/> ANSWER 6:
     <br/> ANSWER 7:
     <br/> ANSWER 8:
     <br/> ANSWER 9:
     <br/> ANSWER 10:
     </p>
     </div>
    </main>
  );
}

