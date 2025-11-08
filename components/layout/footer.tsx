"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address & Contact */}
        <div>
          <h3 className="text-xl font-thin mb-4 text-[#800000]">Contact Us</h3>
          <p className="font-thin flex items-center gap-2 mb-2">
            <MapPin className="size-4" /> Ethiopia Street, opposite Panaf
            Schools
          </p>
          <p className="font-thin flex items-center gap-2 mb-2">
            <Phone className="size-4" /> +234 816 416 6630
          </p>
          <p className="font-thin flex items-center gap-2">
            <Mail className="size-4" /> info@greekgodgym.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-thin mb-4 text-[#800000]">Quick Links</h3>
          <ul className="font-thin space-y-2">
            <li>
              <a
                href="#hero"
                className="hover:text-[#800000] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#whyjoin"
                className="hover:text-[#800000] transition-colors"
              >
                Why Join Us
              </a>
            </li>
            <li>
              <a
                href="#rules"
                className="hover:text-[#800000] transition-colors"
              >
                Rules
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#800000] transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-xl font-thin mb-4 text-[#800000]">
            Stay Connected
          </h3>
          <p className="font-thin mb-4">
            Subscribe to get the latest updates and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-xs text-[#111] flex-1"
            />
            <Button className="bg-[#800000] hover:bg-[#9b0000] font-thin px-4 py-2">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center font-thin text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Greek God Gym. All rights reserved.
      </div>
    </footer>
  );
}
