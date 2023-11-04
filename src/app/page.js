import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <h1 class="text-3xl font-bold text-center">
          483 Ocean Parkway Tenants
        </h1>
        <p>In an effort to get A&E to finally fix our door buzzer, this app will generate an email for you to send to our known management contacts:</p>
        <ul class="list-disc">
          <li>pietro.rimondini@ae-re.com</li>
          <li>nicholas.vlantes@ae-re.com</li>
          <li>sakshi.agarwal2@ae-re.com</li>
        </ul>
        <p>Please provide your name and apartment number. Don&apos;t worry! You will have a chance to edit the email before sending!</p>
      <div>
      <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-name" type="text" placeholder="Jane Doe"/>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
              Apartment Number
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-apartment-number" type="text" placeholder="1A"/>
          </div>
        </div>
        <div>
        <div>
        <p>Hello,</p>
        </div>
        <p>I am a tenant of 483 Ocean Parkway, and I am extremely disappointed that the buzzer on our front door has been broken for so long. Not only is this inconvenient for deliveries and guests, but it is also a safety and security concern. I pay good money every month to live here, and the lack of communication and action are completely unacceptable.</p>
        <p>On behalf of myself and all the other tenants in the building, I demand a response to this email and an acknowledgement of this problem along with a reasonable estimate of when it will be resolved.</p>
        <p>If this matter continues to go unaddressed, I will be completely within my right as a tenant to...</p>
        <p>I look forward to your timely response.</p>
        <p>Thank you,</p>
        <p>Tenant Name, Apt #</p>
        </div>
        <div class="md:flex md:items-center ">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3 p-2">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Send
            </button>
          </div>
        </div>
      </form>
      </div>
    </main>
  )
}
