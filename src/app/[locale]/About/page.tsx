import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Jonathan Yombo",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "Hasan is really extraordinary and very practical, no need to break your head. A real gold mine.",
  },
  {
    name: "Yves Kalume",
    role: "GDE - Android",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Hasan.",
  },
  {
    name: "Yucel Faruksahan",
    role: "Tailkits Creator",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote: "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)",
  },
  {
    name: "Anonymous author",
    role: "Doing something",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "I am really new to Tailwind and I want to give a go to make some page on my own. I searched a lot of hero pages and blocks online. However, most of them are not giving me a clear view or needed some HTML/CSS coding background to make some changes from the original or too expensive to have. I downloaded the one of Hasan template which is very clear to understand at the start and you could modify the codes/blocks to fit perfectly on your purpose of the page.",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Hasan is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it. I can only recommend this incredible wonder.",
  },
  {
    name: "Oketa Fred",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "I absolutely love Hasan! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.",
  },
  {
    name: "Zeki",
    role: "Founder of ChatExtend",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
  },
  {
    name: "Joseph Kitheka",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Hasan has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Hasan is a game-changer for modern web development!",
  },
  {
    name: "Khatab Wedaa",
    role: "MerakiUI Creator",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Hasan is an elegant, clean, and responsive tailwind css components it's very helpful to start fast with your project.",
  },
  {
    name: "Rodrigo Aguilar",
    role: "TailwindAwesome Creator",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "I love Hasan ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time.",
  },
  {
    name: "Eric Ampire",
    role: "Mobile Engineer at @BRPNews • @GoogleDevExpert for Android",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Hasan templates are the perfect solution for anyone who wants to create a beautiful and functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help. I highly recommend Hasan templates to anyone who is looking to create a website.",
  },
  {
    name: "Roland Tubonge",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "Hasan is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced!",
  },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
  const result: Testimonial[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
  return (
    <section className="bg-gradient-to-b from-black via-black to-red-950/60">
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">Loved by the Community</h2>
            <p className="text-body mt-6">Harum quae dolore orrupti aut temporibus ariatur.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 ">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3 ">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index} className="bg-black border-red-950">
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6 ">
                      <Avatar className="size-9">
                        <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
