import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/interactive/AnimatedSection';
import PricingCard from '../components/cards/PricingCard';

const classes = [
  {
    title: "Beginner Class",
    price: 75,
    duration: "session",
    features: [
      "2-hour hands-on instruction",
      "Safety fundamentals",
      "Equipment provided",
      "25 clay targets included",
      "Small group (max 4)",
      "Certificate of completion"
    ],
    popular: false
  },
  {
    title: "Intermediate",
    price: 120,
    duration: "session",
    features: [
      "3-hour advanced training",
      "Technique refinement",
      "50 clay targets included",
      "Video analysis",
      "Competition preparation",
      "Personal progress report"
    ],
    popular: true
  },
  {
    title: "Private Coaching",
    price: 200,
    duration: "session",
    features: [
      "2-hour 1-on-1 instruction",
      "Customized curriculum",
      "75 clay targets included",
      "Equipment consultation",
      "Ongoing support",
      "Priority booking"
    ],
    popular: false
  }
];

const packages = [
  {
    name: "Starter Pack",
    sessions: 4,
    price: 260,
    savings: 40
  },
  {
    name: "Enthusiast Pack",
    sessions: 8,
    price: 480,
    savings: 120
  },
  {
    name: "Pro Pack",
    sessions: 12,
    price: 660,
    savings: 240
  }
];

export default function Classes() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-[#F56600] text-sm font-semibold uppercase tracking-wider">Join Our School</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mt-3 mb-6">
              Classes & Pricing
            </h1>
            <p className="text-lg text-[#2B2B2B]/70 leading-relaxed">
              From your first shot to competition-level skills, we have a class for every stage 
              of your trap shooting journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {classes.map((cls, index) => (
              <PricingCard
                key={cls.title}
                title={cls.title}
                price={cls.price}
                duration={cls.duration}
                features={cls.features}
                popular={cls.popular}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 px-6 bg-[#EAE6C3]/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B]">
              Save with Packages
            </h2>
            <p className="text-[#2B2B2B]/60 mt-2">
              Commit to your progress and save on multiple sessions
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-xl p-6 border border-[#EAE6C3] text-center"
                >
                  <h3 className="font-semibold text-[#2B2B2B] mb-1">{pkg.name}</h3>
                  <p className="text-sm text-[#2B2B2B]/50 mb-4">{pkg.sessions} Beginner Sessions</p>
                  <div className="text-3xl font-bold text-[#3F4A3C] mb-2">${pkg.price}</div>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Save ${pkg.savings}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B]">
              Every Class Includes
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Eye & ear protection",
              "Shotgun & ammunition",
              "Clay targets",
              "Expert instruction",
              "Safety briefing",
              "Refreshments",
              "Insurance coverage",
              "Range access"
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 border border-[#EAE6C3]"
                >
                  <CheckCircle className="w-5 h-5 text-[#F56600] flex-shrink-0" />
                  <span className="text-sm text-[#2B2B2B]">{item}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Contact */}
      <section className="py-20 px-6 bg-[#3F4A3C]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Schedule */}
            <AnimatedSection direction="left">
              <h2 className="text-2xl font-bold text-white mb-6">Class Schedule</h2>
              <div className="space-y-4">
                {[
                  { day: "Saturday", time: "9:00 AM - 12:00 PM" },
                  { day: "Saturday", time: "2:00 PM - 5:00 PM" },
                  { day: "Sunday", time: "10:00 AM - 1:00 PM" },
                  { day: "Weekdays", time: "By appointment" }
                ].map((slot, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <Clock className="w-5 h-5 text-[#F56600]" />
                    <div>
                      <p className="text-white font-medium">{slot.day}</p>
                      <p className="text-white/60 text-sm">{slot.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection direction="right">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F56600] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call us</p>
                    <p className="text-white font-medium">(123) 456-7890</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@trapschool.com"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F56600] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email us</p>
                    <p className="text-white font-medium">info@trapschool.com</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F56600] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Visit us</p>
                    <p className="text-white font-medium">123 Range Road, Outdoor City</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B2B2B] mb-4">
              Questions? We're Here to Help
            </h2>
            <p className="text-[#2B2B2B]/60 mb-8">
              Not sure which class is right for you? Give us a call and we'll help 
              you find the perfect fit for your skill level and goals.
            </p>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#F56600] text-white px-8 py-4 rounded-full font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call (123) 456-7890
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}