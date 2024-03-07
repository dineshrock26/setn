import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar: React.FC = () => {
  return (
    <nav className="bg-white">
      <div className="hidden lg:flex justify-center max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/logo.png" alt="Logo" width={75} height={75} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <p className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </p>
                </Link>
                {/* <Link href="/projects">
                  <p className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Projects
                  </p>
                </Link> */}
                <Link href="/contact">
                  <p className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:hidden flex justify-end'>
        <div className='flex-1'>
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <Sheet>
          <SheetTrigger className='p-2 justify-end'>
            <Image src="/hamburger.svg" alt="Logo" width={25} height={25} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
              <SheetTitle className='flex justify-center'><Image src="/logo.png" alt="Logo" width={100} height={100} /></SheetTitle>
                <div className="flex flex-col justify-center space-y-8 pt-10">
                  <Link href="/">
                    <p className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </p>
                  </Link>
                  <Link href="/projects">
                    <p className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Projects
                    </p>
                  </Link>
                  <Link href="/contact">
                    <p className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Contact
                    </p>
                  </Link>
                </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
    
  );
};

export default Navbar;

