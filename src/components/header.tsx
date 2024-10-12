import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { SubscribeForm } from "./ui/subscribe-form";

export function Header() {
  return (
    <div className="md:fixed top-0 z-10 px-6 py-2 w-full flex justify-between items-center bg-background backdrop-filter backdrop-blur-sm bg-opacity-30">
      <Link href="/" className="font-medium font-mono text-md">
        Awesome Indie Hacker Tools_
      </Link>

      <div className="flex items-center gap-4">
        {/* <div className="hidden md:block">
          <SubscribeForm group="newsletter" placeholder="Get latest updates" />
        </div> */}

        
        {/* <Link href="/blog" className="text-sm font-medium">
          Blog
        </Link> */}

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="hover:bg-transparent p-0 text-sm font-medium"
            >
              About
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>About</DialogTitle>
            </DialogHeader>

            <DialogDescription>
              <a href='https://awesomeindiehacker.tools'>

              </a>
              Awesome Indie Hacker Tools is a curated collection of resources and tools designed to empower independent developers and entrepreneurs. 
              <br />
              <br />
              Our mission is to provide a comprehensive directory of cutting-edge technologies, frameworks, and services that can help streamline your development process 
              and boost your productivity. 
              <br />
              <br />
              Whether you're building a side project or launching a startup, you'll find valuable resources here to support your journey.
              <br />
              <br />
              Feel free to  submit your own tools to the directory by submitting a PR or a issue on&nbsp;
              <a href="https://github.com/iamcorey/awesome-indie-hacker-tools" className="underline font-semibold" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <br />
              <br />
              <a href="https://github.com/iAmCorey/awesome-indie-hacker-tools/issues/new" target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full bg-white text-black rounded-full mt-4"
                  variant="outline"
                >
                  Submit
                </Button>
              </a>
              <div className="flex items-center space-x-1 mt-4 justify-center">
                Using template from&nbsp;
                <a href="https://github.com/pontusab/cursor.directory" className="underline">
                  cursor.directory
                </a>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
