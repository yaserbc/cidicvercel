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

      </div>

      <div>
       <p>
     <br/> ANSWER 1:
     <br/> 5 Most favourite support tasks:
     <p>
     <br/> 1.Work with engineering teams during incidents and provide updates to internal and external stakeholders.
      <br/> 2.Work with 3rd party partners to track down a tricky situation for a joint customer.
      <br/> 3.Analyze hundreds of support tickets to spot trends the product team can use.
      <br/> 4. Identify, file (and, where possible, resolve) bugs in private and public Vercel Next.js repos on GitHub.
      <br/> 5.Work with people to figure out if Vercel is suitable for their use case.
      </p>

      <br/> 5 least favourite support tasks:
      <p>
      <br/> 1.Help resolve billing issues for customers.
      <br/> 2.Create video tutorials to help teach users a specific feature or use case.
      <br/> 3.Find and recruit teammates for the support team.
      <br/> 4. Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites.
      <br/> 5.Manage a support team.
      </p>
      
      <p>
      <br/> ANSWER 2: What I wanted to learn or do more of at work is to get to know my colleagues better. I wanted to build relationship
      to as many colleagues as I could because I know that it will help me with my work.
      </p>

      <p>
      <br/> ANSWER 3: I was running a change which was handed over from a different region. The case was a very long pending case.
    Because I was new, I was not familiar with some hiccups that may happen.As I was running the script from the UI, the page just froze up and went on a blank screen. I was not sure if the script ran successfully and I could not rerun it as it would mess up the system. Then I thought of checking the localhost logs. From there
      I was able to see that the script was still running and I just needed to monitor it from the logs instead.
      </p>

      <p>
    <br/> ANSWER 4:Based on what I understand from research, choose Edge Functions for lightweight tasks that need to run close to the user. Serverless Functions is for more complex backend logic, and Edge Middleware for enhancing performance and security.
    </p>

    <p>
    <br/> ANSWER 5:Ask specific questions like where exactly are they encountering the issue. Also their environment details and steps to reproduce. It will be easier to investigate if you get as many details as you can and if you can reproduce the issue in house.
    </p>

    <p>
    <br/> ANSWER 6:I understand your frustration, and I am here to help. While it is tempting to assume it is a platform issue it is important for us to thoroughly investigate the problem to ensure we address the root cause effectively. By gathering more information and troubleshooting together we can increase our chances of finding a solution that works for you. I will also engage our internal teams for another set of eyes to help with the resolution. Can you please provide any additional details or logs related to the issue? With your collaboration we will work towards resolving this as swiftly as possible.
    </p>

    <p>
    <br/> ANSWER 7:Hi, If you are utilizing a web server such as Apache or Nginx you can accomplish redirects by integrating a redirect directive into the configuration file. For instance within Apache .htaccess file you can implement the following rule. ewriteEngine On RewriteRule ^blog(.*)$ https://example.com$1 [R=301,L]. This directive will automatically redirect any requests to /blog and its subdirectories to https://example.com.
    </p>

    <p>
    <br/> ANSWER 8:Hi, To prevent search engines from indexing your website you can follow these steps.
Robots.txt File: Generate a robots.txt file and store it in your website main directory. Within this file you can outline which sections of your site should be excluded from search engine indexing. For instance to block all search engine crawlers from indexing your entire site you can incorporate the following instruction.
User-agent: * Disallow: /
   </p>

   <p>
    <br/> ANSWER 9:Not sure since I have not used Vercel yet until now.
    </p>

    <p>
    <br/> ANSWER 10:This is my first time performing this exercise but it would help if the time limit is longer since some applicants are not yet familiar with the Vercel application.
    </p>

     </p>
     </div>
    </main>
  );
}

