import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-14 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-14">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <Link href="/">
            <Image
              src="/images/sinc-logo.png"
              alt="Sinc Logo"
              width={115}
              height={64}
              className="w-20 h-12"
            />
          </Link>
          <p>4578 Park Way, West Plaza, Mallhook, MA 92045, Germany</p>
          <span>estore@mail.com</span>
          <span>+2459458213</span>
          {/* <div className="flex gap-4">
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={16}
              height={16}
            />
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={16}
              height={16}
            />
            <Image
              src="/icons/youtube.png"
              alt="Youtube"
              width={16}
              height={16}
            />
            <Image
              src="/icons/linkedin.png"
              alt="Linkedin"
              width={16}
              height={16}
            />
            <Image src="/icons/x.png" alt="X" width={16} height={16} />
          </div> */}
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-semibold text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-semibold text-lg">Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-semibold text-lg">Help</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <h1 className="font-semibold text-lg">Subscribe</h1>
          <p>
            For trends, promotions and much more! join our newsLetter today.
          </p>
          <div className="flex">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-3 w-3/4 rounded-tl-md rounded-bl-md"
            />
            <button className="w-1/4 bg-[#20888F] text-white rounded-tr-md rounded-br-md">
              Join
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          {/* <div className="flex justify-between">
            <Image src="/icons/discover.png" alt="" width={40} height={20} />
            <Image src="/icons/skrill.png" alt="" width={40} height={20} />
            <Image src="/icons/paypal.png" alt="" width={40} height={20} />
            <Image src="/icons/mastercard.png" alt="" width={40} height={20} />
            <Image src="/icons/visa.png" alt="" width={40} height={20} />
          </div> */}
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">
          {" "}
          &copy; {new Date().getFullYear()} SINC Partners Ltd. All rights
          reserved
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language:</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency:</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
